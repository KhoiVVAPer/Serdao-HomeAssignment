import {createContext, useCallback, useMemo} from 'react';
import {Transaction, Beneficiary} from 'src/types';
import {usePersistState} from '@hooks/usePersistState';

type TransactionContextData = {
  transactions: Transaction[];
  currentBalance: number;
  addTransaction: (data: Transaction) => void;
  beneficiaries: Beneficiary[];
  addBeneficiary: (data: Beneficiary) => void;
};

const defaultContextValues: TransactionContextData = {
  transactions: [],
  currentBalance: 1000,
  addTransaction: () => false,
  beneficiaries: [],
  addBeneficiary: () => false,
};

export const TransactionContext =
  createContext<TransactionContextData>(defaultContextValues);

export function useTransactionContextValue(): TransactionContextData {
  const [transactions, setTransactions] = usePersistState('transactions', []);
  const [beneficiaries, setBeneficiaries] = usePersistState('beneficiary', []);
  const [currentBalance, setCurrentBalance] = usePersistState(
    'currentBalance',
    1000,
  );

  const addTransaction = useCallback(
    (data: Transaction) => {
      const listTransactions = [...transactions];
      listTransactions.push(data);
      setTransactions(listTransactions);
      setCurrentBalance(currentBalance - data.amount);
    },
    [currentBalance, setCurrentBalance, setTransactions, transactions],
  );

  const addBeneficiary = useCallback(
    (item: Beneficiary) => {
      const listBeneficiary = [...beneficiaries];
      listBeneficiary.push(item);
      setBeneficiaries(listBeneficiary);
    },
    [beneficiaries, setBeneficiaries],
  );

  return useMemo(
    () => ({
      transactions,
      currentBalance,
      addTransaction,
      beneficiaries,
      addBeneficiary,
    }),
    [
      transactions,
      currentBalance,
      addTransaction,
      beneficiaries,
      addBeneficiary,
    ],
  );
}
