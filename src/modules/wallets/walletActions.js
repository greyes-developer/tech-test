import {walletDepositAddres, walletList} from '../services/wallet';
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

export const doWalletDepositAddressStart = () => {
  return {
    type: WALLET_TYPES.WALLET_DEPOSIT_ADDRESS_START,
  };
};

export const doWalletDepositAddressSuccess = payload => {
  return {
    type: WALLET_TYPES.WALLET_DEPOSIT_ADDRESS_SUCCESS,
    payload,
  };
};

export const doWalletDepositAddressError = payload => {
  return {
    type: WALLET_TYPES.WALLET_DEPOSIT_ADDRESS_ERROR,
    payload,
  };
};

export const startWalletDepositAddress = payload => {
  return async dispatch => {
    dispatch(doWalletDepositAddressStart());

    try {
      const res = await walletDepositAddres(payload);

      if (res.data.success) {
        dispatch(
          doWalletDepositAddressSuccess(res.data.success.payload.address),
        );
      }
    } catch (e) {
      dispatch(doWalletDepositAddressError(e));
    }
  };
};
