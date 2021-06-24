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

export const walletDepositAddress = async coin => {
  const token = await getToken();
  return cryptAPI.get(`/api/v2/wallets/address/${coin}/`, {
    headers: {
      Accept: 'application/json',
      Authorization: `JWT-V3 ${token}`,
    },
  });
};

export const walletSendCrypto = async ({
  coin,
  amount,
  nip,
  recipient,
  description,
}) => {
  const token = await getToken();

  return cryptAPI.post(
    '/api/v3/wallets/inner-transfer/',
    {
      coin,
      amount,
      nip,
      recipient,
      description,
    },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `JWT-V3 ${token}`,
      },
    },
  );
};
