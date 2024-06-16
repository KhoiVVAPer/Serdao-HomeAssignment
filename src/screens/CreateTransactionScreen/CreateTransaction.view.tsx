import React from 'react';
import {View} from 'react-native';
import {styles} from './CreateTransaction.styles';
import {Formik} from 'formik';
import {TransactionData, TransactionSchema} from '@models/Transaction';
import InputField from '@components/input-field/InputField';
import {Beneficiary} from 'src/types';
import Button from '@components/button/Button';
import AppHeader from '@components/header/Header';
import FormWrapper from '@components/form-wrapper/FormWrapper';

type TransactionViewProps = {
  onSubmit: (data: TransactionData) => void;
  beneficiaries: Beneficiary[];
  onGoBack: () => void;
  currentBalance: number;
};

const CreateTransactionView = ({
  onSubmit,
  beneficiaries,
  onGoBack,
  currentBalance,
}: TransactionViewProps) => {
  return (
    <Formik
      initialValues={TransactionData.empty()}
      validationSchema={TransactionSchema(currentBalance)}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={onSubmit}>
      {({submitForm}) => (
        <FormWrapper style={styles.container}>
          <AppHeader title="Create transaction" onPressPrefixIcon={onGoBack} />
          <View style={styles.content}>
            <InputField
              name="amount"
              keyboardType="numeric"
              placeholder="Enter amount"
            />
            <InputField name="name" placeholder="Recipient Name" />
            <InputField name="IBAN" placeholder="Recipient IBAN" />
            {beneficiaries?.length > 0 && (
              <InputField
                type="dropdown"
                name="beneficiaryId"
                data={beneficiaries.map(d => ({
                  id: d.id,
                  label: `${d.firstName} ${d.lastName}`,
                }))}
              />
            )}
          </View>
          <Button label="Submit Transaction" onPress={submitForm} />
        </FormWrapper>
      )}
    </Formik>
  );
};

export default CreateTransactionView;
