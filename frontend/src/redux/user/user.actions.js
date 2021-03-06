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

export const changeUserLoginPassword =
  (values) => async (dispatch, getState) => {
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

export const getUserList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserActionTypes.USER_SHOW.REQUEST,
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

    const { data } = await axios.get(`${defaultApi}/api/users/`, config);

    dispatch({
      type: UserActionTypes.USER_SHOW.SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_SHOW.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteUsers = (items) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserActionTypes.USER_DELETE.REQUEST,
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

    await axios.post(
      `${defaultApi}/api/users/deleteSelectedUsers/`,
      items,
      config
    );

    dispatch({
      type: UserActionTypes.USER_DELETE.SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_DELETE.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createUser = (values) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserActionTypes.USER_CREATE.REQUEST,
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

    await axios.post(`${defaultApi}/api/users/createUser/`, values, config);

    dispatch({
      type: UserActionTypes.USER_CREATE.SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_CREATE.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserActionTypes.USER_DETAILS.REQUEST,
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

    const { data } = await axios.get(`${defaultApi}/api/users/${id}/`, config);

    dispatch({
      type: UserActionTypes.USER_DETAILS.SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_DETAILS.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateUser = (id, values) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserActionTypes.USER_UPDATE.REQUEST,
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

    await axios.put(`${defaultApi}/api/users/${id}/updateUser/`, values, config);

    dispatch({
      type: UserActionTypes.USER_UPDATE.SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_UPDATE.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
