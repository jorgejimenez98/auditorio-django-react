import { UserActionTypes } from "./user.types";
import { combineReducers } from "redux";

// Obtain the authenticated user from localstorage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const INITIAL_STATE = {
  userInfo: userInfoFromStorage,
};

const userLoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN.REQUEST:
      return { loading: true };

    case UserActionTypes.USER_LOGIN.SUCCESS:
      return { loading: false, userInfo: action.payload };

    case UserActionTypes.USER_LOGIN.ERROR:
      return { loading: false, error: action.payload };

    case UserActionTypes.USER_LOGIN.RESET:
      return {};

    default:
      return state;
  }
};

const userLoginChangeDataReducer = (
  state = { loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN_CHANGE_DATA.REQUEST:
      return { loading: true };

    case UserActionTypes.USER_LOGIN_CHANGE_DATA.SUCCESS:
      return { loading: false, success: true };

    case UserActionTypes.USER_LOGIN_CHANGE_DATA.ERROR:
      return { loading: false, error: action.payload };

    case UserActionTypes.USER_LOGIN_CHANGE_DATA.RESET:
      return {};

    default:
      return state;
  }
};

const userReducer = combineReducers({
  userLogin: userLoginReducer,
  userLoginChangeData: userLoginChangeDataReducer,
});

export default userReducer;
