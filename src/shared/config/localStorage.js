import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async token => {
  try {
    await AsyncStorage.setItem('access_token', token);
  } catch (e) {
    console.log('Error al guardar el token');
    console.log(e);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('access_token');
    return token;
  } catch (e) {
    console.log('Error al obtener el token');
    console.log(e);
  }
};
