import {cryptAPI} from '../../shared/api';

export const login = ({email, password, device_name, unique_device_id}) => {
  //   const data = JSON.stringify({
  //     email,
  //     password,
  //     device_name,
  //     unique_device_id,
  //   });

  return cryptAPI.post(
    '/api/v3/auth/signin/',
    {
      email,
      password,
      device_name,
      unique_device_id,
    },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
};
