import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {startWalletDepositAddress} from '../../modules/wallets/walletActions';

import {COLORS} from '../../shared/styles';
import Separator from '../atoms/Separator';

const WalletCard = ({coinIcon, coinTitle, coinName, available, balance}) => {
  const dispatch = useDispatch();

  const {loadingAddress, address} = useSelector(state => state.wallet);

  const onPress = () => {
    dispatch(startWalletDepositAddress(coinTitle));
  };

  return (
    <View>
      {available && (
        <TouchableHighlight underlayColor="#eaeaea" onPress={onPress}>
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: `${coinIcon}`,
                }}
              />
              <Text style={styles.title}>{coinTitle}</Text>
            </View>
            <Separator />
            <Text style={styles.name}>Saldo actual de crypto: {balance}</Text>
            <Text style={styles.name}>Equivalente a pesos MXN: {balance}</Text>
          </View>
        </TouchableHighlight>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 100,
    width: '100%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    borderStartColor: COLORS.BLACK_100,
    borderWidth: 1,
    marginBottom: 6,
    padding: 6,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 4,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.BLACK,
  },
  name: {
    marginTop: 8,
    fontSize: 14,
    color: COLORS.BLACK_500,
  },
});

export default WalletCard;
