import { WorkOrderActionTypes } from "./work-order.types";
import { combineReducers } from "redux";

const INITIAL_STATE = {
  list: {
    list: [],
    loading: false,
    error: null,
  },
  delete: {
    loading: false,
    success: false,
    error: null,
  }
};

const listReducer = (state = INITIAL_STATE.list, action) => {
  switch (action.type) {
    case WorkOrderActionTypes.LIST.REQUEST:
      return {
        ...state,
        loading: true,
      };

    case WorkOrderActionTypes.LIST.SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };

    case WorkOrderActionTypes.LIST.ERROR:
      return {
        ...state,
        list: [],
        loading: false,
        error: action.payload,
      };

    case WorkOrderActionTypes.LIST.RESET:
      return {
        ...state,
        ...INITIAL_STATE.list,
      };

    default:
      return state;
  }
};

const createReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WorkOrderActionTypes.CREATE.REQUEST:
      return {
        ...state,
      };

    case WorkOrderActionTypes.CREATE.SUCCESS:
      return {
        ...state,
      };

    case WorkOrderActionTypes.CREATE.ERROR:
      return {
        ...state,
      };

    case WorkOrderActionTypes.CREATE.RESET:
      return {
        ...state,
      };

    default:
      return state;
  }
};

const updateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WorkOrderActionTypes.UPDATE.REQUEST:
      return {
        ...state,
      };

    case WorkOrderActionTypes.UPDATE.SUCCESS:
      return {
        ...state,
      };

    case WorkOrderActionTypes.UPDATE.ERROR:
      return {
        ...state,
      };

    case WorkOrderActionTypes.UPDATE.RESET:
      return {
        ...state,
      };

    default:
      return state;
  }
};

const deleteReducer = (state = INITIAL_STATE.delete, action) => {
  switch (action.type) {
    case WorkOrderActionTypes.DELETE.REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null
      };

    case WorkOrderActionTypes.DELETE.SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null
      };

    case WorkOrderActionTypes.DELETE.ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload
      };

    case WorkOrderActionTypes.DELETE.RESET:
      return {
        ...state,
        ...INITIAL_STATE.delete
      };

    default:
      return state;
  }
};

const showReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WorkOrderActionTypes.SHOW.REQUEST:
      return {
        ...state,
      };

    case WorkOrderActionTypes.SHOW.SUCCESS:
      return {
        ...state,
      };

    case WorkOrderActionTypes.SHOW.ERROR:
      return {
        ...state,
      };

    case WorkOrderActionTypes.SHOW.RESET:
      return {
        ...state,
      };

    default:
      return state;
  }
};

const workOrderReducer = combineReducers({
  create: createReducer,
  update: updateReducer,
  delete: deleteReducer,
  show: showReducer,
  list: listReducer,
});

export default workOrderReducer;
