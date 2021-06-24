import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import OverlayLoading from '../atoms/OverlayLoading';
import WalletCard from '../molecules/WalletCard';

const ListWalletCard = () => {
  const {data: dataWallet} = useSelector(state => state.wallet);
  const {data: dataCoin} = useSelector(state => state.coin);

  const dataWalletCalculated = dataWallet.data.wallets.map(item => {
    dataCoin.map(coin => {
      if (coin.market.includes(`${item.coin}`))
        item.valuePesosMxn = parseFloat(item.balances.available) * coin.last;
    });

    return item;
  });

  return (
    <View style={{height: '85%'}}>
      <FlatList
        data={dataWalletCalculated}
        renderItem={({item}) => (
          <WalletCard
            coinIcon={item.coin_icon}
            coinTitle={item.coin}
            coinName={item.coin_name}
            available={item.available_to_deposit}
            balance={item.balances.available}
            valuePesosMxn={item.valuePesosMxn}
          />
        )}
        keyExtractor={(item, index) => index}
      />
      {/* <OverlayLoading /> */}
    </View>
  );
};

export default ListWalletCard;
