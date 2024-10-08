import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../Constants/Constant';

export const loginRequest = (userData) => ({
  type: LOGIN_REQUEST,
  payload:userData,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
