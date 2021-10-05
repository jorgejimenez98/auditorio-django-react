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


const userReducer = combineReducers({
  userLogin: userLoginReducer,
});

export default userReducer;
