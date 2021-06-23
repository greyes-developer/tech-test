import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ButtonCustom from '../../components/atoms/ButtonCustom';
import {startLogin} from '../../modules/auth/authActions';
import {COLORS} from '../../shared/styles';

const LoginScreen = ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const {loading, error, data} = useSelector(state => state.auth);

  const login = () => {
    const payload = {
      email: user || 'e2e.test.signup@tauros.io',
      password: password || 'Reactnative@12',
      device_name: 'iphone 11',
      unique_device_id: 'textoAleatorio',
    };

    dispatch(startLogin(payload));
  };

  useEffect(() => {
    if (!loading && !error && data) {
      navigation.navigate('HomeScreen');
    }
  }, [loading]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setUser}
        value={user}
        placeholder="Usuario"
      />
      <TextInput
        style={[styles.input, styles.moreMargin]}
        onChangeText={setPassword}
        value={password}
        placeholder="Contraseña"
        secureTextEntry={true}
      />
      {loading && <ActivityIndicator size="large" color={COLORS.CORE_BLUE} />}
      {!loading && error && <Text>Hubo un error</Text>}
      {!loading && <ButtonCustom text="Iniciar sesión" onPress={login} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 12,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 12,
    textTransform: 'none',
  },
  moreMargin: {
    marginBottom: 32,
  },
});

export default LoginScreen;
