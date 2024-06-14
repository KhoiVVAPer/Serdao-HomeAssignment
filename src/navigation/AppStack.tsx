import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Route from './Routes';
import HomeScreen from '../screens/HomeScreen/Home.container';
import TransactionScreen from '../screens/TransactionScreen/Transaction.container';
import TransactionProvider from '../context/TransactionProvider';

const Stack = createNativeStackNavigator();

export type AppNavigatorParams = {
  [Route.HOME_SCREEN]: undefined;
  [Route.TRANSACTION_SCREEN]: undefined;
};

const AppStack = () => {
  return (
    <TransactionProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Route.HOME_SCREEN} component={HomeScreen} />
          <Stack.Screen
            name={Route.TRANSACTION_SCREEN}
            component={TransactionScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TransactionProvider>
  );
};

export default AppStack;
