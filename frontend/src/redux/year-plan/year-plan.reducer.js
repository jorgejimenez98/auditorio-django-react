import { combineReducers } from 'redux';
import { YearPlanActionTypes } from './year-plan.types';

const INITIAL_STATE = {
  list: {
    list: [],
    loading: false,
    error: null,
  },
  create: {
    loading: false,
    error: null,
    success: null
  },
  delete: {
    loading: false,
    success: false,
    error: null,
  },
  details: {
    loading: false,
    yearPLan: {},
    error: null,
  }
};

const listReducer = (state = INITIAL_STATE.list, action) => {
  switch (action.type) {
    case YearPlanActionTypes.LIST.REQUEST:
      return {
        ...state,
        loading: true,
      };

    case YearPlanActionTypes.LIST.SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };

    case YearPlanActionTypes.LIST.ERROR:
      return {
        ...state,
        list: [],
        loading: false,
        error: action.payload,
      };

    case YearPlanActionTypes.LIST.RESET:
      return {
        ...state,
        ...INITIAL_STATE.list,
      };

    default:
      return state;
  }
};

const createReducer = (state = INITIAL_STATE.create, action) => {
  switch (action.type) {
    case YearPlanActionTypes.CREATE.REQUEST:
      return {
        ...state,
        success: null,
        loading: true
      };

    case YearPlanActionTypes.CREATE.SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload
      };

    case YearPlanActionTypes.CREATE.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case YearPlanActionTypes.CREATE.RESET:
      return {
        ...state,
        ...INITIAL_STATE.create,
      };

    default:
      return state;
  }
};

const detailsReducer = (state = INITIAL_STATE.details, action) => {
  switch (action.type) {
    case YearPlanActionTypes.DETAILS.REQUEST:
      return {
        ...state,
        loading: true,
        yearPLan: {},
        error: null,
      };

    case YearPlanActionTypes.DETAILS.SUCCESS:
      return {
        ...state,
        loading: false,
        yearPLan: action.payload,
        error: null,
      };

    case YearPlanActionTypes.DETAILS.ERROR:
      return {
        ...state,
        loading: false,
        yearPLan: {},
        error: action.payload,
      };

    case YearPlanActionTypes.DETAILS.RESET:
      return {
        ...state,
        loading: false,
        yearPLan: {},
        error: null,
      };

    default:
      return state;
  }
};

const updateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case YearPlanActionTypes.UPDATE.REQUEST:
      return {
        ...state,
      };

    case YearPlanActionTypes.UPDATE.SUCCESS:
      return {
        ...state,
      };

    case YearPlanActionTypes.UPDATE.ERROR:
      return {
        ...state,
      };

    case YearPlanActionTypes.UPDATE.RESET:
      return {
        ...state,
      };

    default:
      return state;
  }
};

const deleteReducer = (state = INITIAL_STATE.delete, action) => {
  switch (action.type) {
    case YearPlanActionTypes.DELETE.REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null
      };

    case YearPlanActionTypes.DELETE.SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null
      };

    case YearPlanActionTypes.DELETE.ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload
      };

    case YearPlanActionTypes.DELETE.RESET:
      return {
        ...state,
        ...INITIAL_STATE.delete
      };

    default:
      return state;
  }
};



const yearPlanReducer = combineReducers({
  create: createReducer,
  update: updateReducer,
  delete: deleteReducer,
  list: listReducer,
  details: detailsReducer,
});

export default yearPlanReducer;
