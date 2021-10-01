import {YearPlanActionTypes} from './year-plan.types';
import {combineReducers} from "redux";

const INITIAL_STATE = {
}

const createReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case YearPlanActionTypes.CREATE.REQUEST:
            return{
                ...state,
            }

        case YearPlanActionTypes.CREATE.SUCCESS:
            return{
                ...state,
            }

        case YearPlanActionTypes.CREATE.ERROR:
            return{
                ...state,
            }

        case YearPlanActionTypes.CREATE.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const updateReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case YearPlanActionTypes.UPDATE.REQUEST:
            return{
                ...state,
            }

        case YearPlanActionTypes.UPDATE.SUCCESS:
            return{
                ...state,
            }

        case YearPlanActionTypes.UPDATE.ERROR:
            return{
                ...state,
            }

        case YearPlanActionTypes.UPDATE.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const deleteReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case YearPlanActionTypes.DELETE.REQUEST:
            return{
                ...state,
            }

        case YearPlanActionTypes.DELETE.SUCCESS:
            return{
                ...state,
            }

        case YearPlanActionTypes.DELETE.ERROR:
            return{
                ...state,
            }

        case YearPlanActionTypes.DELETE.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const showReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case YearPlanActionTypes.SHOW.REQUEST:
            return{
                ...state,
            }

        case YearPlanActionTypes.SHOW.SUCCESS:
            return{
                ...state,
            }

        case YearPlanActionTypes.SHOW.ERROR:
            return{
                ...state,
            }

        case YearPlanActionTypes.SHOW.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}

const listReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case YearPlanActionTypes.LIST.REQUEST:
            return{
                ...state,
            }

        case YearPlanActionTypes.LIST.SUCCESS:
            return{
                ...state,
            }

        case YearPlanActionTypes.LIST.ERROR:
            return{
                ...state,
            }

        case YearPlanActionTypes.LIST.RESET:
            return{
                ...state,
            }
            
        default:
            return state
    }
}





const yearPlanReducer = combineReducers(
    {
        yearPlanCreate: createReducer,
        yearPlanUpdate: updateReducer,
        yearPlanDelete: deleteReducer,
        yearPlanShow: showReducer,
        yearPlanList: listReducer,
    }
);

export default yearPlanReducer;

