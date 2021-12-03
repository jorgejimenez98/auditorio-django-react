import { inventoryActionTypes } from "./inventory.types";
import axios from "axios";
import reduxFunc from "../../redux.settings";
import { urls } from '../../../urls'

const listInventory = () => async (dispatch, getState) => {
  try {
    reduxFunc.request(dispatch, inventoryActionTypes.LIST.REQUEST);
    const config = reduxFunc.config(getState)
    const { data } = await axios.get(urls.inventory, config);
    reduxFunc.success(dispatch, inventoryActionTypes.LIST.SUCCESS, data);
  } catch (error) {
    reduxFunc.error(dispatch, inventoryActionTypes.LIST.ERROR, error);
  }
};

const createInventory = (values) => async (dispatch, getState) => {
  try {
    reduxFunc.request(dispatch, inventoryActionTypes.CREATE.REQUEST);
    const config = reduxFunc.config(getState)
    const { data } = await axios.post(`${urls.inventory}createInventory/`, values, config);
    reduxFunc.success(dispatch, inventoryActionTypes.CREATE.SUCCESS, data);
  } catch (error) {
    reduxFunc.error(dispatch, inventoryActionTypes.CREATE.ERROR, error);
  }
};

const updateInventory = () => async (dispatch, getState) => { };

const deleteInventory = (id) => async (dispatch, getState) => {
  try {
    reduxFunc.request(dispatch, inventoryActionTypes.DELETE.REQUEST);
    const config = reduxFunc.config(getState)
    const { data } = await axios.delete(`${urls.inventory}${id}/deleteInventory/`, config);
    reduxFunc.success(dispatch, inventoryActionTypes.DELETE.SUCCESS, data);
  } catch (error) {
    reduxFunc.error(dispatch, inventoryActionTypes.DELETE.ERROR, error);
  }

};

const inventoryActions = {
  list: listInventory,
  create: createInventory,
  update: updateInventory,
  delete: deleteInventory,
};

export default inventoryActions;
