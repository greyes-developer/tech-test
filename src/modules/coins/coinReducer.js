import {COIN_TYPES} from './coinActionTypes';

const initialState = {
  data: null,
  error: null,
  loading: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case COIN_TYPES.COIN_LIST_START:
      return {
        ...state,
        loading: true,
      };
    case COIN_TYPES.COIN_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null,
      };
    case COIN_TYPES.COIN_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
