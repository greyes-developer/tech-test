import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import WalletCard from '../molecules/WalletCard';

const ListWalletCard = () => {
  const {data} = useSelector(state => state.wallet);

  return (
    <FlatList
      data={data.data.wallets}
      renderItem={({item}) => (
        <WalletCard
          coinIcon={item.coin_icon}
          coinTitle={item.coin}
          coinName={item.coin_name}
        />
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

export default ListWalletCard;
