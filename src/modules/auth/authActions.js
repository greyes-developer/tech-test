import {getToken, setToken} from '../../shared/config/localStorage';
import {login} from '../services/auth';
import {AUTH_TYPES} from './authActionTypes';

export const doAuthLoginStart = () => {
  return {
    type: AUTH_TYPES.AUTH_LOGIN_START,
  };
};

export const doAuthLoginSuccess = payload => {
  return {
    type: AUTH_TYPES.AUTH_LOGIN_SUCCESS,
    payload,
  };
};

export const doAuthLoginError = payload => {
  return {
    type: AUTH_TYPES.AUTH_LOGIN_ERROR,
    payload,
  };
};

export const startLogin = payload => {
  return async dispatch => {
    dispatch(doAuthLoginStart());

    try {
      const res = await login(payload);

      if (res.data.success) {
        await setToken(res.data.payload.access);
        // const token = await getToken();
        dispatch(doAuthLoginSuccess(res.data));
      }
    } catch (e) {
      dispatch(doAuthLoginError(e));
    }
  };
};
