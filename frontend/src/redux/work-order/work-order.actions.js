import { WorkOrderActionTypes } from "./work-order.types";
import axios from "axios";
import reduxFunc from "../redux.settings";
import { urls } from '../../urls'

const listWorkOrder = () => async (dispatch, getState) => {
  try {
    reduxFunc.request(dispatch, WorkOrderActionTypes.LIST.REQUEST);
    const config = reduxFunc.config(getState)
    const { data } = await axios.get(urls.workOrder, config);
    reduxFunc.success(dispatch, WorkOrderActionTypes.LIST.SUCCESS, data);
  } catch (error) {
    reduxFunc.error(dispatch, WorkOrderActionTypes.LIST.ERROR, error);
  }
};

const createWorkOrder = () => {};
const updateWorkOrder = () => {};
const deleteWorkOrder = () => {};

const workOrderActions = {
  list: listWorkOrder,
  create: createWorkOrder,
  update: updateWorkOrder,
  delete: deleteWorkOrder,
};

export default workOrderActions;
