import { UserActionTypes } from "./user.types";
import axios from "axios";
import { defaultApi } from "../../backendUrls";

export const logout = () => async (dispatch) => {
  dispatch({ type: UserActionTypes.USER_LOGIN.RESET });
  localStorage.removeItem("userInfo");
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: UserActionTypes.USER_LOGIN.REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${defaultApi}/users/login/`,
      { email, password },
      config
    );

    if (data.detail) {
      dispatch({
        type: UserActionTypes.USER_LOGIN.ERROR,
        payload: data.detail,
      });
    } else {
      dispatch({
        type: UserActionTypes.USER_LOGIN.SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    }
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_LOGIN.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const changePersonalData = (values) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserActionTypes.USER_LOGIN_CHANGE_DATA.REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState().user;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `${defaultApi}/users/changePersonalData/`,
      values,
      config
    );

    // Update New User Profile
    dispatch({
      type: UserActionTypes.USER_LOGIN.SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));

    // Set a success message

    dispatch({
      type: UserActionTypes.USER_LOGIN_CHANGE_DATA.SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_LOGIN_CHANGE_DATA.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};


export const changeUserLoginPassword = (values) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserActionTypes.USER_LOGIN_CHANGE_PASSWORD.REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState().user;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `${defaultApi}/users/updateUserPassword/`,
      values,
      config
    );

    // Update New User Profile
    dispatch({
      type: UserActionTypes.USER_LOGIN.SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));

    // Set a success message
    dispatch({
      type: UserActionTypes.USER_LOGIN_CHANGE_PASSWORD.SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_LOGIN_CHANGE_PASSWORD.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
