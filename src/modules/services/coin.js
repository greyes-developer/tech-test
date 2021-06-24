import {cryptAPI} from '../../shared/api';
import {getToken} from '../../shared/config/localStorage';

export const coinList = async () => {
  const token = await getToken();
  return cryptAPI.get('/api/v2/trading/ticker/', {
    headers: {
      Accept: 'application/json',
      Authorization: `JWT-V3 ${token}`,
    },
  });
};
