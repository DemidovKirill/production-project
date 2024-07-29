import { DeepPartial } from 'app/providers/Store/index';
import { StoreSchema } from 'app/providers/Store';
import { getUserAuthData } from './getUserAuthData';

describe('Get User Auth State', () => {
  test('Get User Auth State should return the correct counter state', () => {
    const state: DeepPartial<StoreSchema> = {
      user: { userData: { id: '1', username: 'name' } },
    };
    expect(getUserAuthData(state as StoreSchema)).toEqual({
      id: '1',
      username: 'admin',
    });
  });
});