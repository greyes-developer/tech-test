import React from 'react';
import {TouchableHighlight, View, StyleSheet, Text} from 'react-native';

import {COLORS} from '../../shared/styles';

const ButtonCustom = ({text = '', onPress, ...rest}) => {

  return (
    <View style={styles.container}>
      <TouchableHighlight underlayColor="transparent" onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 8,
    height: 50,
    borderRadius: 8,
    backgroundColor: COLORS.CORE_BLUE,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    color: COLORS.WHITE,
    fontSize: 18,
  },
});

export default ButtonCustom;
