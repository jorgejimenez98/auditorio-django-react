import { UserActionTypes } from "./user.types";
import axios from "axios";
import { defaultApi } from "../../backendUrls";

export const logout = () => async (dispatch) => {
  dispatch({ type: UserActionTypes.USER_LOGIN.RESET });
  localStorage.removeItem("token");
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
      localStorage.setItem("token", JSON.stringify(data.token));
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
