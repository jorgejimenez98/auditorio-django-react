import {UserActionTypes} from "./user.types";
import {combineReducers} from "redux";

const INITIAL_STATE = {
    token: localStorage.getItem('token'),
}

const userLoginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.User:
            return {
                ...state,
            }
        default:
            return state;
    }
}

const userLogoutReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.USER_LOGOUT:
            return {
                ...state,
            }
        default:
            return state;
    }
}

const userReducer = combineReducers(
    {
        userLogin: userLoginReducer,
        userLogout: userLogoutReducer
    }
);

export default userReducer;