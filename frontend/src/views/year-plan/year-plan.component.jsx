import React, { useEffect, useState } from "react";

import { yearPlan } from "../../mui-datatables/year-plan/year-plan.table.setting";
import CustomTableComponent from "../../mui-datatables/table.component";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import yearPlanActions from "../../redux/year-plan/year-plan.actions";
import { ConfirmationDialog, Loader, Message } from "../../containers";
import { setSnackbar } from "../../redux/snackbar/snackbar.actions";
import { Tooltip, IconButton, Button, Grid } from "@mui/material";
import { Delete } from "@material-ui/icons";
import { YearPlanActionTypes } from "../../redux/year-plan/year-plan.types";

function YearPlanComponent({ history }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [rowsToDelete, setRowsToDelete] = useState([]);

  // USER INFO Selector
  const { userInfo } = useSelector((state) => state.user.userLogin);
  // year plan list selector
  const { loading, list, error } = useSelector((state) => state.yearPlan.list);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = useSelector((state) => state.yearPlan.delete);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else if (!userInfo.isAuditor) {
      history.push("/403");
    } else {
      dispatch(yearPlanActions.list());
      if (successDelete) {
        const message = "Planes anuales eliminados satisfactoriamente";
        dispatch(setSnackbar(true, "success", message));
        dispatch({ type: YearPlanActionTypes.DELETE.RESET });
      }
    }
  }, [history, userInfo, dispatch, successDelete]);

  /* FUNC AFTER SELECT COLUMNS */
  yearPlan.options.customToolbarSelect = ({ data }) => {
    return (
      <React.Fragment>
        <Tooltip title="Eliminar Planes anuales Seleccionados" className="mr-2">
          <IconButton
            onClick={() => {
              let items = [];
              data.forEach((element) => {
                items.push(list[element.dataIndex]);
              });
              setRowsToDelete(items);
              setShowModal(true);
            }}
          >
            <Delete />
          </IconButton>
        </Tooltip>
      </React.Fragment>
    );
  };

  // Function to Close Modal
  const closeDialog = () => {
    setShowModal(false);
  };

  // Function to delete the selected users
  const agreeConfirm = () => {
    setShowModal(false);
    dispatch(yearPlanActions.delete(rowsToDelete));
  };

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error" message={error} />
      ) : (
        <div>
          {loadingDelete && <Loader />}
          {errorDelete && <Message type="error" message={errorDelete} />}
          <Grid container spacing={2} justifyContent="flex-end">
            <Grid item>
              <CustomTableComponent
                title="Plan anual"
                data={list}
                columns={yearPlan.columns}
                options={yearPlan.options}
              />
            </Grid>
            <Grid item>
              <Link to="/admin/new/year-plan">
                <Button variant="contained" color="success">
                  Nuevo
                </Button>
              </Link>
            </Grid>
            {/* Confirm Dialog */}

            <ConfirmationDialog
              open={showModal}
              closeDialog={closeDialog}
              agreeConfirm={agreeConfirm}
              type="Planes Anuales"
            />
          </Grid>
        </div>
      )}
    </React.Fragment>
  );
}

export default YearPlanComponent;
