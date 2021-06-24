import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {COLORS} from '../../shared/styles';

const OverlayLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.CORE_BLUE} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    position: 'absolute',
  },
});

export default OverlayLoading;
