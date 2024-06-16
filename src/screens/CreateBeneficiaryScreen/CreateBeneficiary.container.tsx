import React, {useContext} from 'react';
import {TransactionContext} from '@context/TransactionContext';
import CreateBeneficiaryView from './CreateBeneficiary.view';
import {useNavigation} from '@react-navigation/native';
import {Beneficiary} from 'src/types';
import {BeneficiaryData} from '@models/Beneficiary';

const CreateBeneficiaryScreen = () => {
  const {addBeneficiary} = useContext(TransactionContext);
  const {goBack} = useNavigation();

  const onSubmitAddBeneficiary = (values: BeneficiaryData) => {
    const {firstName, lastName, IBAN} = values;
    const submitedData: Beneficiary = {
      id: `${Date.now()}`,
      firstName,
      lastName,
      IBAN,
    };

    addBeneficiary(submitedData);
    goBack();
  };

  return (
    <CreateBeneficiaryView
      onSubmit={onSubmitAddBeneficiary}
      onGoBack={goBack}
    />
  );
};

export default CreateBeneficiaryScreen;
