import {cryptAPI} from '../../shared/api';
import {getToken} from '../../shared/config/localStorage';

export const walletList = async () => {
  const token = await getToken();
  return cryptAPI.get('/api/v1/data/listbalances/', {
    headers: {
      Accept: 'application/json',
      Authorization: `JWT-V3 ${token}`,
    },
  });
};
