import { UserActionTypes } from "./user.types";
import { combineReducers } from "redux";

// Obtain the authenticated user from localstorage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const INITIAL_STATE = {
  userInfo: userInfoFromStorage,
};

// USER LOGIN REDUCER

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

// USER LOGIN CHANGE PERSONAL DATA REDUCER

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

// USER LOGIN CHANGE PASSWORD REDUCER

const userLoginChangePasswordReducer = (
  state = { loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN_CHANGE_PASSWORD.REQUEST:
      return { loading: true };

    case UserActionTypes.USER_LOGIN_CHANGE_PASSWORD.SUCCESS:
      return { loading: false, success: true };

    case UserActionTypes.USER_LOGIN_CHANGE_PASSWORD.ERROR:
      return { loading: false, error: action.payload };

    case UserActionTypes.USER_LOGIN_CHANGE_PASSWORD.RESET:
      return {};

    default:
      return state;
  }
};

// USER LOGIN CHANGE PASSWORD REDUCER

const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case UserActionTypes.USER_SHOW.REQUEST:
      return { loading: true };

    case UserActionTypes.USER_SHOW.SUCCESS:
      return { loading: false, users: action.payload };

    case UserActionTypes.USER_SHOW.ERROR:
      return { loading: false, error: action.payload };

    case UserActionTypes.USER_SHOW.RESET:
      return { users: [] };

    default:
      return state;
  }
};

// USER DELETE REDUCER

const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.USER_DELETE.REQUEST:
      return { loading: true };

    case UserActionTypes.USER_DELETE.SUCCESS:
      return { loading: false, success: true };

    case UserActionTypes.USER_DELETE.ERROR:
      return { loading: false, error: action.payload };

    case UserActionTypes.USER_DELETE.RESET:
      return {};

    default:
      return state;
  }
};

// USER CREATE REDUCER

const userCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.USER_CREATE.REQUEST:
      return { loading: true };

    case UserActionTypes.USER_CREATE.SUCCESS:
      return { loading: false, success: true };

    case UserActionTypes.USER_CREATE.ERROR:
      return { loading: false, error: action.payload };

    case UserActionTypes.USER_CREATE.RESET:
      return {};

    default:
      return state;
  }
};

// USER DETAILS REDUCER

const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case UserActionTypes.USER_DETAILS.REQUEST:
      return { loading: true };

    case UserActionTypes.USER_DETAILS.SUCCESS:
      return { loading: false, user: action.payload };

    case UserActionTypes.USER_DETAILS.ERROR:
      return { loading: false, error: action.payload };

    case UserActionTypes.USER_DETAILS.RESET:
      return { user: {} };

    default:
      return state;
  }
};

// USER UPDATE REDUCER

const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.USER_UPDATE.REQUEST:
      return { loading: true };

    case UserActionTypes.USER_UPDATE.SUCCESS:
      return { loading: false, success: true };

    case UserActionTypes.USER_UPDATE.ERROR:
      return { loading: false, error: action.payload };

    case UserActionTypes.USER_UPDATE.RESET:
      return {};

    default:
      return state;
  }
};

const userReducer = combineReducers({
  userLogin: userLoginReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userCreate: userCreateReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  userLoginChangeData: userLoginChangeDataReducer,
  userLoginChangePassword: userLoginChangePasswordReducer,
});

export default userReducer;
