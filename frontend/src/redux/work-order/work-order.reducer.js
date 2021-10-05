import {WorkOrderActionTypes} from './work-order.types';
import {combineReducers} from "redux";

const INITIAL_STATE = {
}

const createReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case WorkOrderActionTypes.CREATE.REQUEST:
            return{
                ...state,
            }

        case WorkOrderActionTypes.CREATE.SUCCESS:
            return{
                ...state,
            }

        case WorkOrderActionTypes.CREATE.ERROR:
            return{
                ...state,
            }

        case WorkOrderActionTypes.CREATE.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const updateReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case WorkOrderActionTypes.UPDATE.REQUEST:
            return{
                ...state,
            }

        case WorkOrderActionTypes.UPDATE.SUCCESS:
            return{
                ...state,
            }

        case WorkOrderActionTypes.UPDATE.ERROR:
            return{
                ...state,
            }

        case WorkOrderActionTypes.UPDATE.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const deleteReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case WorkOrderActionTypes.DELETE.REQUEST:
            return{
                ...state,
            }

        case WorkOrderActionTypes.DELETE.SUCCESS:
            return{
                ...state,
            }

        case WorkOrderActionTypes.DELETE.ERROR:
            return{
                ...state,
            }

        case WorkOrderActionTypes.DELETE.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const showReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case WorkOrderActionTypes.SHOW.REQUEST:
            return{
                ...state,
            }

        case WorkOrderActionTypes.SHOW.SUCCESS:
            return{
                ...state,
            }

        case WorkOrderActionTypes.SHOW.ERROR:
            return{
                ...state,
            }

        case WorkOrderActionTypes.SHOW.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const listReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case WorkOrderActionTypes.LIST.REQUEST:
            return{
                ...state,
            }

        case WorkOrderActionTypes.LIST.SUCCESS:
            return{
                ...state,
            }

        case WorkOrderActionTypes.LIST.ERROR:
            return{
                ...state,
            }

        case WorkOrderActionTypes.LIST.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}





const workOrderReducer = combineReducers(
    {
        workOrderCreate: createReducer,
        workOrderUpdate: updateReducer,
        workOrderDelete: deleteReducer,
        workOrderShow: showReducer,
        workOrderList: listReducer,
    }
);

export default workOrderReducer;

