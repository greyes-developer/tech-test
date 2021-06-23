import {combineReducers} from 'redux';

import auth from './auth/authReducer';
import wallet from './wallets/walletReducer';

export const rootReducer = combineReducers({
  auth,
  wallet,
});
