import { inventoryActionTypes } from './inventory.types';

const INITIAL_STATE = {
}

const inventoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //list
        case inventoryActionTypes.LIST.REQUEST:
            return {
                ...state,
            }

        case inventoryActionTypes.LIST.SUCCESS:
            return {
                ...state,
            }

        case inventoryActionTypes.LIST.ERROR:
            return {
                ...state,
            }

        case inventoryActionTypes.LIST.RESET:
            return {
                ...state,
            }

        //create
        case inventoryActionTypes.CREATE.REQUEST:
            return {
                ...state,
            }

        case inventoryActionTypes.CREATE.SUCCESS:
            return {
                ...state,
            }

        case inventoryActionTypes.CREATE.ERROR:
            return {
                ...state,
            }

        case inventoryActionTypes.CREATE.RESET:
            return {
                ...state,
            }

        //update
        case inventoryActionTypes.UPDATE.REQUEST:
            return {
                ...state,
            }

        case inventoryActionTypes.UPDATE.SUCCESS:
            return {
                ...state,
            }

        case inventoryActionTypes.UPDATE.ERROR:
            return {
                ...state,
            }

        case inventoryActionTypes.UPDATE.RESET:
            return {
                ...state,
            }

        //delete
        case inventoryActionTypes.DELETE.REQUEST:
            return {
                ...state,
            }

        case inventoryActionTypes.DELETE.SUCCESS:
            return {
                ...state,
            }

        case inventoryActionTypes.DELETE.ERROR:
            return {
                ...state,
            }

        case inventoryActionTypes.DELETE.RESET:
            return {
                ...state,
            }

        default:
            return state
    }
}

export default inventoryReducer;

