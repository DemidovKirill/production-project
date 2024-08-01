import axios, { AxiosStatic } from 'axios';
import {
  authByUsernameAsyncThunk,
} from 'features/AuthByUsername/model/services/authByUsernameAsyncThunk/authByUsernameAsyncThunk';
import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk';
import { userActions } from 'entities/User';

jest.mock('axios');
const mockedAxios: jest.MockedFunctionDeep<AxiosStatic> = jest.mocked(axios);

describe('Auth by username AsyncThunk', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Success auth', async () => {
    const userData = { username: 'admin', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    const thunk = new TestAsyncThunk(authByUsernameAsyncThunk);
    const result = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUserData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);

    expect(mockedAxios.post).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('fulfilled');

    expect(result.payload).toEqual(userData);
  });

  test('Failed auth', async () => {
    const thunk = new TestAsyncThunk(authByUsernameAsyncThunk);
    const result = await thunk.callThunk({ username: null, password: null });

    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    expect(mockedAxios.post).toHaveBeenCalled();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);

    expect(result.meta.requestStatus).toBe('rejected');

    expect(result.payload).toEqual('Incorrect Auth data');
  });
});
