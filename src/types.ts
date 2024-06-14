export type Transaction = {
  id: string;
  amount: number;
  account: Account;
};

export type Account = {
  name: string;
  iban: string;
};
