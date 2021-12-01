import { YearPlanActionTypes } from './year-plan.types';

const INITIAL_STATE = {
}

const yearPlanReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //list
        case YearPlanActionTypes.LIST.REQUEST:
            return {
                ...state,
            }

        case YearPlanActionTypes.LIST.SUCCESS:
            return {
                ...state,
            }

        case YearPlanActionTypes.LIST.ERROR:
            return {
                ...state,
            }

        case YearPlanActionTypes.LIST.RESET:
            return {
                ...state,
            }
        //create
        case YearPlanActionTypes.CREATE.REQUEST:
            return {
                ...state,
            }

        case YearPlanActionTypes.CREATE.SUCCESS:
            return {
                ...state,
            }

        case YearPlanActionTypes.CREATE.ERROR:
            return {
                ...state,
            }

        case YearPlanActionTypes.CREATE.RESET:
            return {
                ...state,
            }
        //update
        case YearPlanActionTypes.UPDATE.REQUEST:
            return {
                ...state,
            }

        case YearPlanActionTypes.UPDATE.SUCCESS:
            return {
                ...state,
            }

        case YearPlanActionTypes.UPDATE.ERROR:
            return {
                ...state,
            }

        case YearPlanActionTypes.UPDATE.RESET:
            return {
                ...state,
            }
        //delete
        case YearPlanActionTypes.DELETE.REQUEST:
            return {
                ...state,
            }

        case YearPlanActionTypes.DELETE.SUCCESS:
            return {
                ...state,
            }

        case YearPlanActionTypes.DELETE.ERROR:
            return {
                ...state,
            }

        case YearPlanActionTypes.DELETE.RESET:
            return {
                ...state,
            }


        default:
            return state
    }
}

export default yearPlanReducer;

