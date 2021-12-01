import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tooltip, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import CustomTableComponent from "../../mui-datatables/table.component";
import { workOrderTableSetting } from "../../mui-datatables/work-order/work-order.table.setting";
import workOrderActions from "../../redux/work-order/work-order.actions";
import { Loader, Message, ConfirmationDialog } from "../../containers";

function WorkOrderComponent({ history }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [rowsToDelete, setRowsToDelete] = useState([]);

  // USER INFO Selector
  const { userInfo } = useSelector((state) => state.user.userLogin);

  // WORK ORDERS SELECTOR
  const { loading, error, list } = useSelector((state) => state.workOrder.list);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else if (!userInfo.isAuditor) {
      history.push("/403");
    } else {
      dispatch(workOrderActions.list());
    }
  }, [history, userInfo, dispatch]);

  /* FUNC AFTER SELECT COLUMNS */
  workOrderTableSetting.options.customToolbarSelect = ({ data }) => {
    return (
      <React.Fragment>
        <Tooltip
          title="Eliminar Ordenes de Trabajo Seleccionados"
          className="mr-2"
        >
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
    console.log("Delete", rowsToDelete);
  };

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error" message={error} />
      ) : (
        <div className="text-center">
          <CustomTableComponent
            title="Ordenes de trabajo"
            data={list}
            columns={workOrderTableSetting.columns}
            options={workOrderTableSetting.options}
          />

          {/* Confirm Dialog */}

          <ConfirmationDialog
            open={showModal}
            closeDialog={closeDialog}
            agreeConfirm={agreeConfirm}
            type="Ordenes de Trabajo"
          />
        </div>
      )}
    </React.Fragment>
  );
}

export default WorkOrderComponent;
