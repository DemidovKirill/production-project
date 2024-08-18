import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk';
import { Currency } from 'entities/CurrencySelect';
import { Country } from 'entities/CountrySelect';
import { ValidateProfileDataError } from 'pages/ProfilePage';
import { updateProfileData } from './updateProfileData';

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

describe('Update Profile Data asyncThunk', () => {
  test('Success update', async () => {
    const thunk = new TestAsyncThunk(
      updateProfileData,
      { profile: { formData: data } },
    );

    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('Failed update', async () => {
    const thunk = new TestAsyncThunk(
      updateProfileData,
      { profile: { formData: data } },
    );

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileDataError.SERVER_ERROR]);
  });

  test('Validate error', async () => {
    const thunk = new TestAsyncThunk(
      updateProfileData,
      { profile: { formData: { ...data, firstname: '', age: 0 } } },
    );

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload)
      .toEqual(
        [
          ValidateProfileDataError.INCORRECT_USER_NAME,
          ValidateProfileDataError.INCORRECT_AGE,
        ],
      );
  });
});
