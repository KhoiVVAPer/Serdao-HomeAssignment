import React, {useContext, useState} from 'react';
import {TransactionContext} from '../../context/TransactionContext';
import TransactionView from './Transaction.view';
import {useNavigation} from '@react-navigation/native';

const TransactionScreen = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [iban, setIban] = useState('');
  const {addTransaction} = useContext(TransactionContext);
  const {goBack} = useNavigation();

  const handleTransaction = () => {
    const accountDetails = {name, iban};
    addTransaction(amount, accountDetails);
    goBack();
  };

  return (
    <TransactionView
      amount={amount}
      onChangeAmount={setAmount}
      onChangeIBAN={setIban}
      onChangeName={setName}
      name={name}
      iban={iban}
      onSubmitTransaction={handleTransaction}
    />
  );
};

export default TransactionScreen;
