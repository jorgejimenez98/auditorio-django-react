import { UserActionTypes } from "./user.types";
import { combineReducers } from "redux";

// Obtain the authenticated user from localstorage
const userInfoFromStorage = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
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

const userLogoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGOUT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

const userReducer = combineReducers({
  userLogin: userLoginReducer,
  userLogout: userLogoutReducer,
});

export default userReducer;
