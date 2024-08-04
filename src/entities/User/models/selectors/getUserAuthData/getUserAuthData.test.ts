import { StoreSchema } from 'app/providers/Store';
import { getUserAuthData } from './getUserAuthData';

describe('Get User Auth State', () => {
  test('Get User Auth State should return the correct user auth state state', () => {
    const state: DeepPartial<StoreSchema> = {
      user: { userData: { id: '1', username: 'admin' } },
    };
    expect(getUserAuthData(state as StoreSchema)).toEqual({
      id: '1',
      username: 'admin',
    });
  });
});
