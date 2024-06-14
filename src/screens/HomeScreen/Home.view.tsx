import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {styles} from './Home.styles';
import {Transaction} from '../../types';

type HomeViewProps = {
  transactions?: Transaction[];
  currentBalance: number;
  onPressAddTransaction: () => void;
};

export const HomeView = ({
  transactions,
  currentBalance,
  onPressAddTransaction,
}: HomeViewProps) => {
  const renderItem = (item: Transaction) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>Transaction ID: {item.id}</Text>
      <Text style={styles.itemText}>Amount: ${item.amount.toFixed(2)}</Text>
      {item.account && (
        <>
          <Text style={styles.itemText}>To: {item.account.name}</Text>
          <Text style={styles.itemText}>IBAN: {item.account.iban}</Text>
        </>
      )}
    </View>
  );

  const renderEmptyList = () => {
    return <Text>empty</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.balanceText}>
        Current Balance: ${currentBalance.toFixed(2)}
      </Text>
      <Button title="Add Transaction" onPress={onPressAddTransaction} />
      <FlatList
        data={transactions}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => renderItem(item)}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={renderEmptyList}
      />
    </View>
  );
};
