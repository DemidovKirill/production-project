import { DeepPartial } from 'app/providers/Store/index';
import { StoreSchema } from 'app/providers/Store';
import { getAuthUsername } from './getAuthUsername';

describe('Get Auth Username', () => {
  test('Get Auth Username should return the correct Username state', () => {
    const state: DeepPartial<StoreSchema> = {
      auth: { username: 'admin' },
    };
    expect(getAuthUsername(state as StoreSchema)).toEqual('admin');
  });

  test('Get Auth Username without state should return the correct Username state', () => {
    const state: DeepPartial<StoreSchema> = {};
    expect(getAuthUsername(state as StoreSchema)).toEqual('');
  });
});
