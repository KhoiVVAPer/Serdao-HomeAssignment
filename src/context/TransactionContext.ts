import {createContext, useMemo, useState} from 'react';
import {Transaction, Account} from '../types';

type TransactionContextData = {
  transactions?: Transaction[];
  currentBalance: number;
  addTransaction: (amount: string, account: Account) => void;
};

const defaultContextValues: TransactionContextData = {
  transactions: undefined,
  currentBalance: 1000,
  addTransaction: () => false,
};

export const TransactionContext =
  createContext<TransactionContextData>(defaultContextValues);

export function useTransactionContextValue(): TransactionContextData {
  const [transactions, setTransactions] = useState<Transaction[]>();
  const [currentBalance, setCurrentBalance] = useState(1000);

  const addTransaction = (amount: string, account: Account) => {
    const newTransaction = {
      id: `${Date.now()}`,
      amount: parseFloat(amount),
      account,
    };

    setTransactions(prevTransactions =>
      prevTransactions
        ? [...prevTransactions, newTransaction]
        : [newTransaction],
    );
    setCurrentBalance(prevBalance => prevBalance - parseFloat(amount));
  };

  return useMemo(
    () => ({
      transactions,
      currentBalance,
      addTransaction,
    }),
    [transactions, currentBalance],
  );
}
