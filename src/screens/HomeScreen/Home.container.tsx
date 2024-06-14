import React, {useContext} from 'react';
import {HomeView} from './Home.view';
import {TransactionContext} from '../../context/TransactionContext';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Route from '../../navigation/Routes';
import {AppNavigatorParams} from '../../navigation/AppStack';

const HomeScreen = () => {
  const {transactions, currentBalance} = useContext(TransactionContext);
  const {navigate} = useNavigation<NavigationProp<AppNavigatorParams>>();

  const onAddTransaction = () => {
    navigate(Route.TRANSACTION_SCREEN);
  };

  return (
    <HomeView
      transactions={transactions}
      currentBalance={currentBalance}
      onPressAddTransaction={onAddTransaction}
    />
  );
};

export default HomeScreen;
