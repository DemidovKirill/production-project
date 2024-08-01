import { DeepPartial } from 'app/providers/Store/index';
import { StoreSchema } from 'app/providers/Store';
import { getAuthPassword } from './getAuthPassword';

describe('Get Auth Password', () => {
  test('Get Auth Password should return the correct Password state', () => {
    const state: DeepPartial<StoreSchema> = {
      auth: { password: '123' },
    };
    expect(getAuthPassword(state as StoreSchema)).toEqual('123');
  });

  test('Get Auth Password without state should return the correct Password state', () => {
    const state: DeepPartial<StoreSchema> = {};
    expect(getAuthPassword(state as StoreSchema)).toEqual('');
  });
});
