export type Transaction = {
  id: string;
  amount: number;
  account: Account;
  beneficiary?: Beneficiary;
};

export type Account = {
  name: string;
  IBAN: string;
};

export type Beneficiary = {
  id: string;
  firstName: string;
  lastName: string;
  IBAN: string;
};
