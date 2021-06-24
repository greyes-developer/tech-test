import {coinList} from '../services/coin';
import {COIN_TYPES} from './coinActionTypes';

export const doCoinListStart = () => {
  return {
    type: COIN_TYPES.COIN_LIST_START,
  };
};

export const doCoinListSuccess = payload => {
  return {
    type: COIN_TYPES.COIN_LIST_SUCCESS,
    payload,
  };
};

export const doCoinListError = payload => {
  return {
    type: COIN_TYPES.COIN_LIST_ERROR,
    payload,
  };
};

export const startCoinList = () => {
  return async dispatch => {
    dispatch(doCoinListStart());

    try {
      const res = await coinList();

      if (res.data) {
        dispatch(doCoinListSuccess(res.data.data));
      }
    } catch (e) {
      dispatch(doCoinListError(e));
    }
  };
};
