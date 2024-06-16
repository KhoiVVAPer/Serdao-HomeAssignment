import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Route from './Routes';
import HomeScreen from '../screens/HomeScreen/Home.container';
import CreateTransactionScreen from '../screens/CreateTransactionScreen/CreateTransaction.container';
import TransactionProvider from '../context/TransactionProvider';
import CreateBeneficiaryScreen from '../screens/CreateBeneficiaryScreen/CreateBeneficiary.container';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export type AppNavigatorParams = {
  [Route.HOME_SCREEN]: undefined;
  [Route.TRANSACTION_SCREEN]: undefined;
  [Route.BENEFICIARY_SCREEN]: undefined;
};

const AppStack = () => {
  return (
    <TransactionProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name={Route.HOME_SCREEN} component={HomeScreen} />
            <Stack.Screen
              name={Route.TRANSACTION_SCREEN}
              component={CreateTransactionScreen}
            />
            <Stack.Screen
              name={Route.BENEFICIARY_SCREEN}
              component={CreateBeneficiaryScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </TransactionProvider>
  );
};

export default AppStack;
