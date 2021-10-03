import {FinalReportActionTypes} from './final-report.types';
import {combineReducers} from "redux";

const INITIAL_STATE = {
}

const createReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FinalReportActionTypes.CREATE.REQUEST:
            return{
                ...state,
            }

        case FinalReportActionTypes.CREATE.SUCCESS:
            return{
                ...state,
            }

        case FinalReportActionTypes.CREATE.ERROR:
            return{
                ...state,
            }

        case FinalReportActionTypes.CREATE.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const updateReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FinalReportActionTypes.UPDATE.REQUEST:
            return{
                ...state,
            }

        case FinalReportActionTypes.UPDATE.SUCCESS:
            return{
                ...state,
            }

        case FinalReportActionTypes.UPDATE.ERROR:
            return{
                ...state,
            }

        case FinalReportActionTypes.UPDATE.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const deleteReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FinalReportActionTypes.DELETE.REQUEST:
            return{
                ...state,
            }

        case FinalReportActionTypes.DELETE.SUCCESS:
            return{
                ...state,
            }

        case FinalReportActionTypes.DELETE.ERROR:
            return{
                ...state,
            }

        case FinalReportActionTypes.DELETE.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const showReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FinalReportActionTypes.SHOW.REQUEST:
            return{
                ...state,
            }

        case FinalReportActionTypes.SHOW.SUCCESS:
            return{
                ...state,
            }

        case FinalReportActionTypes.SHOW.ERROR:
            return{
                ...state,
            }

        case FinalReportActionTypes.SHOW.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const listReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FinalReportActionTypes.LIST.REQUEST:
            return{
                ...state,
            }

        case FinalReportActionTypes.LIST.SUCCESS:
            return{
                ...state,
            }

        case FinalReportActionTypes.LIST.ERROR:
            return{
                ...state,
            }

        case FinalReportActionTypes.LIST.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}





const finalReportReducer = combineReducers(
    {
        finalReportCreate: createReducer,
        finalReportUpdate: updateReducer,
        finalReportDelete: deleteReducer,
        finalReportShow: showReducer,
        finalReportList: listReducer,
    }
);

export default finalReportReducer;

