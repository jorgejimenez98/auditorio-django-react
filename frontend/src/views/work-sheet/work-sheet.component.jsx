import React, { useEffect, useState } from "react";
import { inventoryTableSetting } from "../../mui-datatables/work-sheet/inventory.table.setting";
import CustomTableComponent from "../../mui-datatables/table.component";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import inventoryActions from "../../redux/work-sheet/inventory/inventory.actions";
import { Loader, Message } from "../../containers";

function WorkSheetComponent({ history }) {
  const dispatch = useDispatch();

  // USER INFO Selector
  const { userInfo } = useSelector((state) => state.user.userLogin);

  // INVENTORY LIST SELECTOR
  const { loading, list, error } = useSelector((state) => state.inventory.list);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else if (!userInfo.isAuditor) {
      history.push("/403");
    } else {
      dispatch(inventoryActions.list());
    }
  }, [history, userInfo, dispatch]);

  const [type, setType] = useState("inventory");

  const handleChange = (event) => () => {
    setType(event.target.value);
  };

  const content = () => {
    switch (type) {
      default:
        return (
          <div>
            <CustomTableComponent
              title="Inventario"
              data={list}
              columns={inventoryTableSetting.columns}
              options={inventoryTableSetting.options}
            />
          </div>
        );
    }
  };

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error" message={error} />
      ) : (
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item xs={12}>
            {content()}
          </Grid>
          <Grid item>
            <FormControl fullWidth style={{ minWidth: "150px" }}>
              <InputLabel id="demo-simple-select-label">
                Tipo de plantilla
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Tipo de plantilla"
                onChange={handleChange}
              >
                <MenuItem value={"inventory"}>inventory</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Link to={`/admin/new/${type}`}>
              <Button variant="contained" color="success">
                Nuevo
              </Button>
            </Link>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
}

export default WorkSheetComponent;
