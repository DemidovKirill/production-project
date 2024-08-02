import { Country } from 'shared/constants/country';
import { Currency } from 'shared/constants/currency';

export interface ProfileData {
  firstName: string;
  lastName: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}
