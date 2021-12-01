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

const createInventory = () => {};
const updateInventory = () => {};
const deleteInventory = () => {};

const inventoryActions = {
  list: listInventory,
  create: createInventory,
  update: updateInventory,
  delete: deleteInventory,
};

export default inventoryActions;
