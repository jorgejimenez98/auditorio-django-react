import {DeficiencySummaryActionTypes} from './deficiency-summary.types';
import {combineReducers} from "redux";

const INITIAL_STATE = {
}

const createReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case DeficiencySummaryActionTypes.CREATE.REQUEST:
            return{
                ...state,
            }

        case DeficiencySummaryActionTypes.CREATE.SUCCESS:
            return{
                ...state,
            }

        case DeficiencySummaryActionTypes.CREATE.ERROR:
            return{
                ...state,
            }

        case DeficiencySummaryActionTypes.CREATE.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const updateReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case DeficiencySummaryActionTypes.UPDATE.REQUEST:
            return{
                ...state,
            }

        case DeficiencySummaryActionTypes.UPDATE.SUCCESS:
            return{
                ...state,
            }

        case DeficiencySummaryActionTypes.UPDATE.ERROR:
            return{
                ...state,
            }

        case DeficiencySummaryActionTypes.UPDATE.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const deleteReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case DeficiencySummaryActionTypes.DELETE.REQUEST:
            return{
                ...state,
            }

        case DeficiencySummaryActionTypes.DELETE.SUCCESS:
            return{
                ...state,
            }

        case DeficiencySummaryActionTypes.DELETE.ERROR:
            return{
                ...state,
            }

        case DeficiencySummaryActionTypes.DELETE.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const showReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case DeficiencySummaryActionTypes.SHOW.REQUEST:
            return{
                ...state,
            }

        case DeficiencySummaryActionTypes.SHOW.SUCCESS:
            return{
                ...state,
            }

        case DeficiencySummaryActionTypes.SHOW.ERROR:
            return{
                ...state,
            }

        case DeficiencySummaryActionTypes.SHOW.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const listReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case DeficiencySummaryActionTypes.LIST.REQUEST:
            return{
                ...state,
            }

        case DeficiencySummaryActionTypes.LIST.SUCCESS:
            return{
                ...state,
            }

        case DeficiencySummaryActionTypes.LIST.ERROR:
            return{
                ...state,
            }

        case DeficiencySummaryActionTypes.LIST.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}





const deficiencySummaryReducer = combineReducers(
    {
        deficiencySummaryCreate: createReducer,
        deficiencySummaryUpdate: updateReducer,
        deficiencySummaryDelete: deleteReducer,
        deficiencySummaryShow: showReducer,
        deficiencySummaryList: listReducer,
    }
);

export default deficiencySummaryReducer;

