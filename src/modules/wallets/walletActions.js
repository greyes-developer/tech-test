import {walletList} from '../services/wallet';
import {WALLET_TYPES} from './walletActionTypes';

export const doWalletListStart = () => {
  return {
    type: WALLET_TYPES.WALLET_LIST_START,
  };
};

export const doWalletListSuccess = payload => {
  return {
    type: WALLET_TYPES.WALLET_LIST_SUCCESS,
    payload,
  };
};

export const doWalletListError = payload => {
  return {
    type: WALLET_TYPES.WALLET_LIST_ERROR,
    payload,
  };
};

export const startWalletList = payload => {
  return async dispatch => {
    dispatch(doWalletListStart());

    try {
      const res = await walletList();

      if (res.data) {
        dispatch(doWalletListSuccess(res.data));
      }
    } catch (e) {
      dispatch(doWalletListError(e));
    }
  };
};
