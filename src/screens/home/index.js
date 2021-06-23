import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListWalletCard from '../../components/organisms/ListWalletCard';

import {startWalletList} from '../../modules/wallets/walletActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const {loading, data, error} = useSelector(state => state.wallet);

  useEffect(() => {
    dispatch(startWalletList());
  }, loading);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home screen</Text>
      {loading && <ActivityIndicator />}
      {!loading && data && <ListWalletCard />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 48
  },
});

export default HomeScreen;
