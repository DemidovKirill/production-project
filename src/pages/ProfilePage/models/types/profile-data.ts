import { Currency } from 'entities/CurrencySelect/model/types/currency';
import { Country } from 'entities/CountrySelect/models/types/country';

export interface ProfileData {
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export type ProfileDataKeys = keyof ProfileData;
