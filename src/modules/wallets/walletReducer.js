import {WALLET_TYPES} from './walletActionTypes';

const initialState = {
  data: null,
  error: null,
  loading: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case WALLET_TYPES.WALLET_LIST_START:
      return {
        ...state,
        loading: true,
      };
    case WALLET_TYPES.WALLET_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null,
      };
    case WALLET_TYPES.WALLET_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
