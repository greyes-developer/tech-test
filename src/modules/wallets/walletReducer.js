import {WALLET_TYPES} from './walletActionTypes';

const initialState = {
  data: null,
  error: null,
  loading: false,
  address: null,
  loadingAddress: false,
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
    case WALLET_TYPES.WALLET_DEPOSIT_ADDRESS_START:
      return {
        ...state,
        loadingAddress: true,
      };
    case WALLET_TYPES.WALLET_DEPOSIT_ADDRESS_SUCCESS:
      return {
        ...state,
        loadingAddress: false,
        error: null,
        address: payload,
      };
    case WALLET_TYPES.WALLET_DEPOSIT_ADDRESS_ERROR:
      return {
        ...state,
        loadingAddress: false,
        error: payload,
      };
    default:
      return state;
  }
};
