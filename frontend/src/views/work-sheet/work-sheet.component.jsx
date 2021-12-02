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
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import inventoryActions from "../../redux/work-sheet/inventory/inventory.actions";
import { Loader, Message } from "../../containers";
import yearPlanActions from "../../redux/year-plan/year-plan.actions";
import workOrderActions from "../../redux/work-order/work-order.actions";

function WorkSheetComponent({ history }) {
  const dispatch = useDispatch();
  const [yearPlan, setyearPlan] = useState()
  const [workOrder, setWorkOrder] = useState()
  const [list, setlist] = useState([])
  // USER INFO Selector
  const { userInfo } = useSelector((state) => state.user.userLogin);

  // INVENTORY LIST SELECTOR
  const { loading: loadInv, list: listInv, error: errorInv } = useSelector((state) => state.inventory.list);
  const { loading: loadYear, list: listYear, error: errorYear } = useSelector((state) => state.yearPlan.list);
  const { loading: loadWork, list: listWork, error: errorWork } = useSelector((state) => state.workOrder.list);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else if (!userInfo.isAuditor) {
      history.push("/403");
    } else {
      dispatch(inventoryActions.list());
      dispatch(yearPlanActions.list());
      dispatch(workOrderActions.list());
    }
  }, [history, userInfo, dispatch]);

  const [type, setType] = useState("inventory");

  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  const handleChangeYear = (event) => {
    setyearPlan(event.target.value);
  };
  const handleChangeWork = (event) => {
    setWorkOrder(event.target.value);
    listInv.forEach((inv, idx) => {
      if (inv.workOrder.noWO === workOrder.noWO) {
        setlist(inv.inventoryItems);
        return;
      };
    });
  }
  // console.log('@@@@@@@@@@@@@@@@@@@ listInv @@@@@@@@@@@@@@@@')
  // console.log(listInv)
  // console.log('@@@@@@@@@@@@@@@@@ listWork @@@@@@@@@@@@@@@@')
  // console.log(listWork)
  // console.log('@@@@@@@@@@@@@@@@@@@@ listYear @@@@@@@@@@@@')
  // console.log(listYear)
  // console.log('@@@@@@@@@@@@@@@@@@@@ selectYear @@@@@@@@@@@@')
  // console.log(yearPlan)

  console.log('@@@@@@@@@@@@ year @@@@@@@@@@@@@@@@@@@@@');
  console.log(yearPlan);
  console.log('@@@@@@@@@@@@ work @@@@@@@@@@@@@@@@@@@@@');
  console.log(workOrder);
  console.log('@@@@@@@@@@@@ list @@@@@@@@@@@@@@@@@@@@@');
  console.log(list);


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
      {loadInv ? (
        <Loader />
      ) : errorInv ? (
        <Message type="error" message={errorInv} />
      ) : loadWork ? (
        <Loader />
      ) : errorWork ? (
        <Message type="error" message={errorWork} />
      ) : loadYear ? (
        <Loader />
      ) : errorYear ? (
        <Message type="error" message={errorYear} />
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
                onChange={handleChangeType}
              >
                <MenuItem value={"inventory"}>inventory</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth style={{ minWidth: "150px" }}>
              <InputLabel id="demo-simple-select-label">
                Plan Anual
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={yearPlan ? yearPlan.year : ''}
                label="Tipo de plantilla"
                onChange={handleChangeYear}
              >
                {listYear.map((year, idx) => (
                  <MenuItem key={idx} value={year}>{`${year.year}`}</MenuItem>
                ))}

              </Select>
            </FormControl>
          </Grid>
          {yearPlan &&
            <Grid item>
              <FormControl fullWidth style={{ minWidth: "150px" }}>
                <InputLabel id="demo-simple-select-label">
                  Orden de trabajo
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={workOrder ? `OT-${workOrder.noWO}` : ''}
                  label="Tipo de plantilla"
                  onChange={handleChangeWork}
                >
                  {yearPlan.workOrders.map((wo, idx) => (
                    <MenuItem key={idx} value={wo}>{`OT-${wo.noWO}`}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>}
          <Grid item>
            <Link to={`/admin/new/${type}`}>
              <Button variant="contained" color="success">
                Nuevo
              </Button>
            </Link>
          </Grid>
        </Grid>
      )
      }
    </React.Fragment >
  );
}

export default WorkSheetComponent;
