import {AUTH_TYPES} from './authActionTypes';

const initialState = {
  data: null,
  error: null,
  loading: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case AUTH_TYPES.AUTH_LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case AUTH_TYPES.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null,
      };
    case AUTH_TYPES.AUTH_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
