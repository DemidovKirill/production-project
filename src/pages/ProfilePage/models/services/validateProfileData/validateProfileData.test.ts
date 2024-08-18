import { Currency } from 'entities/CurrencySelect';
import { Country } from 'entities/CountrySelect';
import { ValidateProfileDataError } from 'pages/ProfilePage';
import { validateProfileData } from './validateProfileData';

const data = {
  firstname: 'Кирилл',
  lastname: 'Демидов',
  age: 25,
  currency: Currency.EUR,
  country: Country.USA,
  city: 'Moscow',
  username: 'admin',
  avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
};

describe('Validate Profile Data asyncThunk', () => {
  test('No errors', async () => {
    const errors = validateProfileData(data);
    expect(errors).toEqual([]);
  });

  test('Firstname error', async () => {
    const errors = validateProfileData({ ...data, firstname: '' });
    expect(errors).toEqual([ValidateProfileDataError.INCORRECT_USER_NAME]);
  });

  test('Lastname error', async () => {
    const errors = validateProfileData({ ...data, lastname: '' });
    expect(errors).toEqual([ValidateProfileDataError.INCORRECT_USER_LASTNAME]);
  });

  test('Age error', async () => {
    const errors = validateProfileData({ ...data, age: 0 });
    expect(errors).toEqual([ValidateProfileDataError.INCORRECT_AGE]);
  });

  test('Empty profile data error', async () => {
    const errors = validateProfileData();
    expect(errors).toEqual([ValidateProfileDataError.EMPTY_PROFILE_DATA]);
  });

  test('Multiply errors', async () => {
    const errors = validateProfileData({ ...data, firstname: '', age: 0 });
    expect(errors).toEqual([ValidateProfileDataError.INCORRECT_USER_NAME, ValidateProfileDataError.INCORRECT_AGE]);
  });
});
