import {
  authByUsernameAsyncThunk,
} from 'features/AuthByUsername/model/services/authByUsernameAsyncThunk/authByUsernameAsyncThunk';
import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk';
import { userActions } from 'entities/User';

describe('Auth by username AsyncThunk', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Success auth', async () => {
    const userData = { username: 'admin', id: '1' };
    const thunk = new TestAsyncThunk(authByUsernameAsyncThunk);

    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));

    const result = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUserData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);

    expect(thunk.api.post).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('fulfilled');

    expect(result.payload).toEqual(userData);
  });

  test('Failed auth', async () => {
    const thunk = new TestAsyncThunk(authByUsernameAsyncThunk);
    const result = await thunk.callThunk({ username: '', password: '' });

    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    expect(thunk.api.post).toHaveBeenCalled();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);

    expect(result.meta.requestStatus).toBe('rejected');

    expect(result.payload).toEqual('Incorrect Auth data');
  });
});
