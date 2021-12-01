import { WorkOrderActionTypes } from './work-order.types';

const INITIAL_STATE = {
}

const workOrderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // list
        case WorkOrderActionTypes.LIST.REQUEST:
            return {
                ...state,
            }

        case WorkOrderActionTypes.LIST.SUCCESS:
            return {
                ...state,
            }

        case WorkOrderActionTypes.LIST.ERROR:
            return {
                ...state,
            }

        case WorkOrderActionTypes.LIST.RESET:
            return {
                ...state,
            }

        //create
        case WorkOrderActionTypes.CREATE.REQUEST:
            return {
                ...state,
            }

        case WorkOrderActionTypes.CREATE.SUCCESS:
            return {
                ...state,
            }

        case WorkOrderActionTypes.CREATE.ERROR:
            return {
                ...state,
            }

        case WorkOrderActionTypes.CREATE.RESET:
            return {
                ...state,
            }

        //update
        case WorkOrderActionTypes.UPDATE.REQUEST:
            return {
                ...state,
            }

        case WorkOrderActionTypes.UPDATE.SUCCESS:
            return {
                ...state,
            }

        case WorkOrderActionTypes.UPDATE.ERROR:
            return {
                ...state,
            }

        case WorkOrderActionTypes.UPDATE.RESET:
            return {
                ...state,
            }

        //delete
        case WorkOrderActionTypes.DELETE.REQUEST:
            return {
                ...state,
            }

        case WorkOrderActionTypes.DELETE.SUCCESS:
            return {
                ...state,
            }

        case WorkOrderActionTypes.DELETE.ERROR:
            return {
                ...state,
            }

        case WorkOrderActionTypes.DELETE.RESET:
            return {
                ...state,
            }

        default:
            return state
    }
}

export default workOrderReducer;

