import {combineReducers} from 'redux';

import auth from './auth/authReducer';
import wallet from './wallets/walletReducer';
import coin from './coins/coinReducer';

export const rootReducer = combineReducers({
  auth,
  wallet,
  coin,
});
