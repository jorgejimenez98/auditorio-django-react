const getUserConfig = (getState) => {
  const {
    userLogin: { userInfo },
  } = getState().user;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  return config;
};

const dispatchErrorMessage = (dispatch, actionType, error) => {
  dispatch({
    type: actionType,
    payload:
      error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
  });
};

const requestActionType = (dispatch, actionType) => {
  dispatch({
    type: actionType,
  });
};

const successActionType = (dispatch, actionType, data) => {
  dispatch({
    type: actionType,
    payload: data,
  });
};

const reduxFunc = {
  config: getUserConfig,
  error: dispatchErrorMessage,
  request: requestActionType,
  success: successActionType,
};

export default reduxFunc;
