import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import ButtonCustom from '../../components/atoms/ButtonCustom';

const LoginScreen = ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log(user);
    navigation.navigate('HomeScreen');
  };

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
      <ButtonCustom text="Iniciar sesión" onPress={login} />
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
