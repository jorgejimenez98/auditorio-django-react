import {WorkSheetActionTypes} from './work-sheet.types';
import {combineReducers} from "redux";

const INITIAL_STATE = {
}

const createReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case WorkSheetActionTypes.CREATE.REQUEST:
            return{
                ...state,
            }

        case WorkSheetActionTypes.CREATE.SUCCESS:
            return{
                ...state,
            }

        case WorkSheetActionTypes.CREATE.ERROR:
            return{
                ...state,
            }

        case WorkSheetActionTypes.CREATE.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const updateReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case WorkSheetActionTypes.UPDATE.REQUEST:
            return{
                ...state,
            }

        case WorkSheetActionTypes.UPDATE.SUCCESS:
            return{
                ...state,
            }

        case WorkSheetActionTypes.UPDATE.ERROR:
            return{
                ...state,
            }

        case WorkSheetActionTypes.UPDATE.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const deleteReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case WorkSheetActionTypes.DELETE.REQUEST:
            return{
                ...state,
            }

        case WorkSheetActionTypes.DELETE.SUCCESS:
            return{
                ...state,
            }

        case WorkSheetActionTypes.DELETE.ERROR:
            return{
                ...state,
            }

        case WorkSheetActionTypes.DELETE.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const showReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case WorkSheetActionTypes.SHOW.REQUEST:
            return{
                ...state,
            }

        case WorkSheetActionTypes.SHOW.SUCCESS:
            return{
                ...state,
            }

        case WorkSheetActionTypes.SHOW.ERROR:
            return{
                ...state,
            }

        case WorkSheetActionTypes.SHOW.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const listReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case WorkSheetActionTypes.LIST.REQUEST:
            return{
                ...state,
            }

        case WorkSheetActionTypes.LIST.SUCCESS:
            return{
                ...state,
            }

        case WorkSheetActionTypes.LIST.ERROR:
            return{
                ...state,
            }

        case WorkSheetActionTypes.LIST.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}





const workSheetReducer = combineReducers(
    {
        workSheetCreate: createReducer,
        workSheetUpdate: updateReducer,
        workSheetDelete: deleteReducer,
        workSheetShow: showReducer,
        workSheetList: listReducer,
    }
);

export default workSheetReducer;

