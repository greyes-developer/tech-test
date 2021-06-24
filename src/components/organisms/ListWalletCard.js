import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import OverlayLoading from '../atoms/OverlayLoading';
import WalletCard from '../molecules/WalletCard';

const ListWalletCard = () => {
  const {data} = useSelector(state => state.wallet);

  return (
    <View style={{height: '85%'}}>
      <FlatList
        data={data.data.wallets}
        renderItem={({item}) => (
          <WalletCard
            coinIcon={item.coin_icon}
            coinTitle={item.coin}
            coinName={item.coin_name}
            available={item.available_to_deposit}
            balance={item.balances.available}
          />
        )}
        keyExtractor={(item, index) => index}
      />
      {/* <OverlayLoading /> */}
    </View>
  );
};

export default ListWalletCard;
