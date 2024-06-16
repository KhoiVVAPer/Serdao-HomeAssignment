import React, {useContext} from 'react';
import {TransactionContext} from '@context/TransactionContext';
import CreateTransactionView from './CreateTransaction.view';
import {useNavigation} from '@react-navigation/native';
import {TransactionData} from '@models/Transaction';
import {Transaction} from 'src/types';

const CreateTransactionScreen = () => {
  const {addTransaction, beneficiaries, currentBalance} =
    useContext(TransactionContext);
  const {goBack} = useNavigation();

  const handleTransaction = (values: TransactionData) => {
    const {name, IBAN, amount, beneficiaryId} = values;
    const selectedBeneficiary = beneficiaries.find(b => b.id === beneficiaryId);
    const submitedData: Transaction = {
      id: `${Date.now()}`,
      amount: parseFloat(amount),
      beneficiary: selectedBeneficiary,
      account: {
        name,
        IBAN,
      },
    };

    addTransaction(submitedData);
    goBack();
  };

  return (
    <CreateTransactionView
      onSubmit={handleTransaction}
      beneficiaries={beneficiaries}
      onGoBack={goBack}
      currentBalance={currentBalance}
    />
  );
};

export default CreateTransactionScreen;
