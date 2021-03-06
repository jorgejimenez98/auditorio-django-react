const LOGIN = {
  REQUEST: "LOGIN_REQUEST",
  SUCCESS: "LOGIN_SUCCESS",
  ERROR: "LOGIN_ERROR",
  RESET: "LOGIN_RESET",
};

const USER_LOGIN_CHANGE_DATA = {
  REQUEST: "USER_LOGIN_CHANGE_DATA_REQUEST",
  SUCCESS: "USER_LOGIN_CHANGE_DATA_SUCCESS",
  ERROR: "USER_LOGIN_CHANGE_DATA_ERROR",
  RESET: "USER_LOGIN_CHANGE_DATA_RESET",
};

const USER_LOGIN_CHANGE_PASSWORD = {
  REQUEST: "USER_LOGIN_CHANGE_PASSWORD_REQUEST",
  SUCCESS: "USER_LOGIN_CHANGE_PASSWORD_SUCCESS",
  ERROR: "USER_LOGIN_CHANGE_PASSWORD_ERROR",
  RESET: "USER_LOGIN_CHANGE_PASSWORD_RESET",
};

const USER_SHOW = {
  REQUEST: "USER_SHOW_REQUEST",
  SUCCESS: "USER_SHOW_SUCCESS",
  ERROR: "USER_SHOW_ERROR",
  RESET: "USER_SHOW_RESET",
};

const DELETE = {
  REQUEST: "USER_DELETE_REQUEST",
  SUCCESS: "USER_DELETE_SUCCESS",
  ERROR: "USER_DELETE_ERROR",
  RESET: "USER_DELETE_RESET",
};

const CREATE = {
  REQUEST: "USER_CREATE_REQUEST",
  SUCCESS: "USER_CREATE_SUCCESS",
  ERROR: "USER_CREATE_ERROR",
  RESET: "USER_CREATE_RESET",
};

const DETAILS = {
  REQUEST: "USER_DETAILS_REQUEST",
  SUCCESS: "USER_DETAILS_SUCCESS",
  ERROR: "USER_DETAILS_ERROR",
  RESET: "USER_DETAILS_RESET",
};

const UPDATE = {
  REQUEST: "USER_UPDATE_REQUEST",
  SUCCESS: "USER_UPDATE_SUCCESS",
  ERROR: "USER_UPDATE_ERROR",
  RESET: "USER_UPDATE_RESET",
};

export const UserActionTypes = {
  USER_LOGIN: LOGIN,
  USER_SHOW: USER_SHOW,
  USER_CREATE: CREATE,
  USER_UPDATE: UPDATE,
  USER_DETAILS: DETAILS,
  USER_DELETE: DELETE,
  USER_LOGIN_CHANGE_DATA: USER_LOGIN_CHANGE_DATA,
  USER_LOGIN_CHANGE_PASSWORD: USER_LOGIN_CHANGE_PASSWORD,
};
