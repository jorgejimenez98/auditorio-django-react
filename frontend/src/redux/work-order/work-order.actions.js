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

const createWorkOrder = (values) => async (dispatch, getState) => {
  try {
    reduxFunc.request(dispatch, WorkOrderActionTypes.CREATE.REQUEST);
    const config = reduxFunc.config(getState)
    const { data } = await axios.post(`${urls.workOrder}createWorkOrder/`, values, config);
    reduxFunc.success(dispatch, WorkOrderActionTypes.CREATE.SUCCESS, data);
  } catch (error) {
    reduxFunc.error(dispatch, WorkOrderActionTypes.CREATE.ERROR, error);
  }
};

const updateWorkOrder = (values, id) => async (dispatch, getState) => {
  try {
    alert(JSON.stringify(values,null, 2))
    reduxFunc.request(dispatch, WorkOrderActionTypes.UPDATE.REQUEST);
    const config = reduxFunc.config(getState)
    const { data } = await axios.put(`${urls.workOrder}${id}/updateWorOrder/`, values, config);
    reduxFunc.success(dispatch, WorkOrderActionTypes.UPDATE.SUCCESS, data);
  } catch (error) {
    reduxFunc.error(dispatch, WorkOrderActionTypes.UPDATE.ERROR, error);
  }
};

const deleteWorkOrder = (rows) => async (dispatch, getState) => {
  try {
    reduxFunc.request(dispatch, WorkOrderActionTypes.DELETE.REQUEST);
    const config = reduxFunc.config(getState)
    const { data } = await axios.post(`${urls.workOrder}deleteWorkOrders/`, rows, config);
    reduxFunc.success(dispatch, WorkOrderActionTypes.DELETE.SUCCESS, data);
  } catch (error) {
    reduxFunc.error(dispatch, WorkOrderActionTypes.DELETE.ERROR, error);
  }
};

const detailsWorkOrder = (id) => async (dispatch, getState) => {
  try {
    reduxFunc.request(dispatch, WorkOrderActionTypes.DETAILS.REQUEST);
    const config = reduxFunc.config(getState)
    const { data } = await axios.get(`${urls.workOrder}${id}/`, config);
    console.log('Data', data)
    reduxFunc.success(dispatch, WorkOrderActionTypes.DETAILS.SUCCESS, data);
  } catch (error) {
    reduxFunc.error(dispatch, WorkOrderActionTypes.DETAILS.ERROR, error);
  }
};

const workOrderActions = {
  list: listWorkOrder,
  create: createWorkOrder,
  update: updateWorkOrder,
  delete: deleteWorkOrder,
  details: detailsWorkOrder,
};

export default workOrderActions;
