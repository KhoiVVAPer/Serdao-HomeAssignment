import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {styles} from './Home.styles';
import {Transaction} from 'src/types';
import CustomButton from '@components/button/Button';
import {images} from '@assets/images';

type HomeViewProps = {
  transactions?: Transaction[];
  currentBalance: number;
  onPressAddTransaction: () => void;
  onPressCreateBeneficiary: () => void;
};

export const HomeView = ({
  transactions,
  currentBalance,
  onPressAddTransaction,
  onPressCreateBeneficiary,
}: HomeViewProps) => {
  const renderItem = (item: Transaction) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>Transaction ID: {item.id}</Text>
      <Text style={styles.itemText}>Amount: ${item.amount.toFixed(2)}</Text>
      {item.account && (
        <>
          <Text style={styles.itemText}>To: {item.account.name}</Text>
          <Text style={styles.itemText}>IBAN: {item.account.IBAN}</Text>
        </>
      )}
      {item.beneficiary && (
        <Text style={styles.itemText}>
          Beneficiary:
          {`${item.beneficiary.firstName} ${item.beneficiary.lastName}`}
        </Text>
      )}
    </View>
  );

  const renderEmptyList = () => (
    <View style={styles.emptyListContainer}>
      <View style={styles.emptyListBG}>
        <Image source={images.emptyList} style={styles.image} />
      </View>
      <Text>No available transactions.</Text>
    </View>
  );

  const renderListHeader = () => (
    <View style={styles.titleSection}>
      <Text style={styles.titleLabel}>Transaction history:</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.balanceText}>
        Current Balance:
        <Text style={styles.boldText}> ${currentBalance.toFixed(2)}</Text>
      </Text>
      <View style={styles.row}>
        <CustomButton
          icon={images.moneyTransfer}
          label="Add Transaction"
          onPress={onPressAddTransaction}
        />
        <View style={styles.horizontalSpace} />
        <CustomButton
          icon={images.beneficiary}
          label="Create Beneficiary"
          onPress={onPressCreateBeneficiary}
        />
      </View>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => renderItem(item)}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={renderEmptyList}
        ListHeaderComponent={renderListHeader}
      />
    </View>
  );
};
