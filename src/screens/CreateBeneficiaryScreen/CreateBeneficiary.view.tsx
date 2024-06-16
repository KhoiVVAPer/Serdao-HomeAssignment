import React from 'react';
import {View} from 'react-native';
import {styles} from './CreateBeneficiary.styles';
import {Formik} from 'formik';
import {BeneficiaryData, BeneficiarySchema} from '@models/Beneficiary';
import InputField from '@components/input-field/InputField';
import Button from '@components/button/Button';
import AppHeader from '@components/header/Header';
import FormWrapper from 'src/components/form-wrapper/FormWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';

type BeneficiaryViewProps = {
  onSubmit: (data: BeneficiaryData) => void;
  onGoBack: () => void;
};

const CreateBeneficiaryView = ({onSubmit, onGoBack}: BeneficiaryViewProps) => {
  return (
    <Formik
      initialValues={BeneficiaryData.empty()}
      validationSchema={BeneficiarySchema}
      validateOnChange={true}
      onSubmit={onSubmit}>
      {({submitForm}) => (
        <FormWrapper style={styles.container}>
          <SafeAreaView style={styles.content}>
            <AppHeader
              title="Create beneficiary"
              onPressPrefixIcon={onGoBack}
            />
            <View style={styles.content}>
              <InputField name="firstName" placeholder="Enter fist name" />
              <InputField name="lastName" placeholder="Enter last name" />
              <InputField name="IBAN" placeholder="Enter IBAN" />
            </View>
            <Button label="Add" onPress={submitForm} />
          </SafeAreaView>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default CreateBeneficiaryView;
