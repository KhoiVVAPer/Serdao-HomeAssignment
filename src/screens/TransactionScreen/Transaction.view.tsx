import React from 'react';
import {View, TextInput, Button} from 'react-native';
import {styles} from './Transaction.styles';

type TransactionViewProps = {
  amount: string;
  onChangeAmount: (amount: string) => void;
  name: string;
  onChangeName: (name: string) => void;
  iban: string;
  onChangeIBAN: (name: string) => void;
  onSubmitTransaction: () => void;
};

const TransactionView = ({
  amount,
  onChangeAmount,
  name,
  onChangeName,
  iban,
  onChangeIBAN,
  onSubmitTransaction,
}: TransactionViewProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeAmount}
        value={amount}
        keyboardType="numeric"
        placeholder="Enter amount"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Recipient Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeIBAN}
        value={iban}
        placeholder="Recipient IBAN"
      />
      <Button title="Submit Transaction" onPress={onSubmitTransaction} />
    </View>
  );
};

export default TransactionView;
