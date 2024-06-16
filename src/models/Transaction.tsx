import {isValid} from 'iban';
import * as Yup from 'yup';

export class TransactionData {
  constructor(
    readonly name: string,
    readonly amount: string,
    readonly IBAN: string,
    readonly beneficiaryId: string,
  ) {}

  static empty(): TransactionData {
    return new TransactionData('', '', '', '');
  }
}

export const TransactionSchema = (avaialableBalance: number) =>
  Yup.object().shape({
    name: Yup.string().trim().required('Please input name'),
    amount: Yup.number()
      .required('Please input amount')
      .max(
        avaialableBalance,
        `Insufficient available balance in your account \n(current balance: $${avaialableBalance})`,
      ),
    IBAN: Yup.string()
      .trim()
      .required('Please input IBAN')
      .test('valid', 'Invalid IBAN', value => {
        console.log('validate -> iban', value);
        return isValid(value);
      }),
    beneficiaryId: Yup.string().trim().required('Please select beneficiary'),
  });
