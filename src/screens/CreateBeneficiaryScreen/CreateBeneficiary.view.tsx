import React from 'react';
import {View} from 'react-native';
import {styles} from './CreateBeneficiary.styles';
import {Formik} from 'formik';
import {BeneficiaryData, BeneficiarySchema} from '@models/Beneficiary';
import InputField from '@components/input-field/InputField';
import Button from '@components/button/Button';
import AppHeader from '@components/header/Header';

type BeneficiaryViewProps = {
  onSubmit: (data: BeneficiaryData) => void;
  onGoBack: () => void;
};

const CreateBeneficiaryView = ({onSubmit, onGoBack}: BeneficiaryViewProps) => {
  return (
    <Formik
      initialValues={BeneficiaryData.empty()}
      validationSchema={BeneficiarySchema}
      validateOnChange={false}
      onSubmit={onSubmit}>
      {({submitForm}) => (
        <View style={styles.container}>
          <AppHeader title="Create beneficiary" onPressPrefixIcon={onGoBack} />
          <View style={styles.content}>
            <InputField name="firstName" placeholder="Enter fist name" />
            <InputField name="lastName" placeholder="Enter last name" />
            <InputField name="IBAN" placeholder="Enter IBAN" />
          </View>
          <Button label="Add" onPress={submitForm} />
        </View>
      )}
    </Formik>
  );
};

export default CreateBeneficiaryView;
