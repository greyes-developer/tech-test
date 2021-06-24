import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {COLORS} from '../../shared/styles';

const ErrorMessage = () => {
  return (
    <Text style={styles.text}>Ha ocurrido un error, inténtalo de nuevo</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    width: '100%',
    color: COLORS.RED,
    marginTop: 8,
    marginBottom: 8,
  },
});
export default ErrorMessage;
