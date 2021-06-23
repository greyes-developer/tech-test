import React from 'react';
import {View} from 'react-native';
import {COLORS} from '../../shared/styles';

const Separator = () => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: COLORS.BLACK_300,
      }}></View>
  );
};

export default Separator;
