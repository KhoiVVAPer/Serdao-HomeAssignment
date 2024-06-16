import iban from 'iban';
import * as Yup from 'yup';

export class BeneficiaryData {
  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly IBAN: string,
  ) {}

  static empty(): BeneficiaryData {
    return new BeneficiaryData('', '', '');
  }
}
export const BeneficiarySchema = Yup.object().shape({
  firstName: Yup.string().trim().required('Please input first name'),
  lastName: Yup.string().trim().required('Please input last name'),
  IBAN: Yup.string()
    .trim()
    .required('Please input IBAN')
    .test('valid', 'Invalid IBAN', value => {
      return iban.isValid(value);
    }),
});
