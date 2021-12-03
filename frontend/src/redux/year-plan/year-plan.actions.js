import { YearPlanActionTypes } from "./year-plan.types";
import axios from "axios";
import reduxFunc from "../redux.settings";
import { urls } from '../../urls'

const listYearPlan = () => async (dispatch, getState) => {
    try {
        reduxFunc.request(dispatch, YearPlanActionTypes.LIST.REQUEST);
        const config = reduxFunc.config(getState)
        const { data } = await axios.get(urls.yearPlan, config);
        reduxFunc.success(dispatch, YearPlanActionTypes.LIST.SUCCESS, data);
    } catch (error) {
        reduxFunc.error(dispatch, YearPlanActionTypes.LIST.ERROR, error);
    }
};

const createYearPlan = (values) => async (dispatch, getState) => {
    try {
        reduxFunc.request(dispatch, YearPlanActionTypes.CREATE.REQUEST);
        const config = reduxFunc.config(getState)
        const { data } = await axios.post(`${urls.yearPlan}createYearPlan/`, values, config);
        reduxFunc.success(dispatch, YearPlanActionTypes.CREATE.SUCCESS, data);
        console.log('create ear')
    } catch (error) {
        reduxFunc.error(dispatch, YearPlanActionTypes.CREATE.ERROR, error);
    }
}
const updateYearPlan = (su) => async (dispatch, getState) => {
    
}

const deleteYearPlan = (rows) => async (dispatch, getState) => {
    try {
        reduxFunc.request(dispatch, YearPlanActionTypes.DELETE.REQUEST);
        const config = reduxFunc.config(getState)
        const { data } = await axios.post(`${urls.yearPlan}deleteYearPlan/`, rows, config);
        reduxFunc.success(dispatch, YearPlanActionTypes.DELETE.SUCCESS, data);
    } catch (error) {
        reduxFunc.error(dispatch, YearPlanActionTypes.DELETE.ERROR, error);
    }
}

const detailsYearPlan = (id) => async (dispatch, getState) => {
    try {
        reduxFunc.request(dispatch, YearPlanActionTypes.DETAILS.REQUEST);
        const config = reduxFunc.config(getState)
        const { data } = await axios.post(`${urls.yearPlan}${id}/`, config);
        reduxFunc.success(dispatch, YearPlanActionTypes.DETAILS.SUCCESS, data);
    } catch (error) {
        reduxFunc.error(dispatch, YearPlanActionTypes.DETAILS.ERROR, error);
    }
}

const yearPlanActions = {
    list: listYearPlan,
    create: createYearPlan,
    update: updateYearPlan,
    delete: deleteYearPlan,
    details: detailsYearPlan
}

export default yearPlanActions;



