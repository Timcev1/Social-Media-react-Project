

export const setLoginPending = (isLoginPending) => {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
}

export const setLoginSuccess =(isLoginSuccess) => {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

export const setLoginError = (loginError) => {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  };
}
