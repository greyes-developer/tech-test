import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {startWalletDepositAddress} from '../../modules/wallets/walletActions';
import {startWalletList} from '../../modules/wallets/walletActions';
import {startCoinList} from '../../modules/coins/coinActions';
import ListWalletCard from '../../components/organisms/ListWalletCard';
import {COLORS} from '../../shared/styles';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const {
    loading: loadingWallet,
    data: dataWallet,
    loadingAddress,
    address,
  } = useSelector(state => state.wallet);
  const {loading: loadingCoin, data: dataCoin} = useSelector(
    state => state.coin,
  );

  const wow = useSelector(state => state);

  useEffect(() => {
    dispatch(startWalletList());
    dispatch(startWalletDepositAddress('BTC'));
    dispatch(startCoinList());
  }, []);

  // console.log('Todo el estado');
  // console.log(`${JSON.stringify(wow)}`);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home screen</Text>
      {loadingWallet && loadingAddress && loadingCoin && (
        <ActivityIndicator size="large" color={COLORS.CORE_BLUE} />
      )}
      {!loadingWallet &&
        !loadingCoin &&
        !loadingAddress &&
        address &&
        dataWallet &&
        dataCoin && <ListWalletCard />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: COLORS.WHITE,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
});

export default HomeScreen;
