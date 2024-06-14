import React, {ReactNode} from 'react';
import {
  useTransactionContextValue,
  TransactionContext,
} from './TransactionContext';

export type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = (props: AppProviderProps) => {
  const {children} = props;
  const TransactionContextData = useTransactionContextValue();

  return (
    <TransactionContext.Provider value={TransactionContextData}>
      {children}
    </TransactionContext.Provider>
  );
};

export default AppProvider;
