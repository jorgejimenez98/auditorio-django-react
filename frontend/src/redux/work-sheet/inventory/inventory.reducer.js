import { inventoryActionTypes } from "./inventory.types";
import { combineReducers } from "redux";

const INITIAL_STATE = {
  list: {
    list: [],
    loading: false,
    error: null,
  },
};

const listReducer = (state = INITIAL_STATE.list, action) => {
  switch (action.type) {
    case inventoryActionTypes.LIST.REQUEST:
      return {
        ...state,
        loading: true,
      };

    case inventoryActionTypes.LIST.SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };

    case inventoryActionTypes.LIST.ERROR:
      return {
        ...state,
        list: [],
        loading: false,
        error: action.payload
      };

    case inventoryActionTypes.LIST.RESET:
      return {
        ...state,
        ...INITIAL_STATE.list
      };

    default:
      return state;
  }
};

const createReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case inventoryActionTypes.CREATE.REQUEST:
      return {
        ...state,
      };

    case inventoryActionTypes.CREATE.SUCCESS:
      return {
        ...state,
      };

    case inventoryActionTypes.CREATE.ERROR:
      return {
        ...state,
      };

    case inventoryActionTypes.CREATE.RESET:
      return {
        ...state,
      };

    default:
      return state;
  }
};

const updateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case inventoryActionTypes.UPDATE.REQUEST:
      return {
        ...state,
      };

    case inventoryActionTypes.UPDATE.SUCCESS:
      return {
        ...state,
      };

    case inventoryActionTypes.UPDATE.ERROR:
      return {
        ...state,
      };

    case inventoryActionTypes.UPDATE.RESET:
      return {
        ...state,
      };

    default:
      return state;
  }
};

const deleteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case inventoryActionTypes.DELETE.REQUEST:
      return {
        ...state,
      };

    case inventoryActionTypes.DELETE.SUCCESS:
      return {
        ...state,
      };

    case inventoryActionTypes.DELETE.ERROR:
      return {
        ...state,
      };

    case inventoryActionTypes.DELETE.RESET:
      return {
        ...state,
      };

    default:
      return state;
  }
};

const showReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case inventoryActionTypes.SHOW.REQUEST:
      return {
        ...state,
      };

    case inventoryActionTypes.SHOW.SUCCESS:
      return {
        ...state,
      };

    case inventoryActionTypes.SHOW.ERROR:
      return {
        ...state,
      };

    case inventoryActionTypes.SHOW.RESET:
      return {
        ...state,
      };

    default:
      return state;
  }
};

const inventoryReducers = combineReducers({
  create: createReducer,
  update: updateReducer,
  report: deleteReducer,
  show: showReducer,
  list: listReducer,
});

export default inventoryReducers;
