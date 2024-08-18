import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk';
import { fetchProfileData } from 'pages/ProfilePage';
import { Currency } from 'entities/CurrencySelect';
import { Country } from 'entities/CountrySelect';

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

describe('Fetch Profile Data asyncThunk', () => {
  test('Success fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('Failed fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
