import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListWalletCard from '../../components/organisms/ListWalletCard';

import {startWalletList} from '../../modules/wallets/walletActions';
import {COLORS} from '../../shared/styles';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const {loading, data, error} = useSelector(state => state.wallet);

  useEffect(() => {
    dispatch(startWalletList());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home screen</Text>
      {loading && <ActivityIndicator size="large" color={COLORS.CORE_BLUE} />}
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
    backgroundColor: COLORS.WHITE
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
});

export default HomeScreen;
