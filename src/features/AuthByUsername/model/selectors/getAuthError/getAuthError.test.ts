import { DeepPartial } from 'app/providers/Store/index';
import { StoreSchema } from 'app/providers/Store';
import { getAuthError } from './getAuthError';

describe('Get Auth Error', () => {
  test('Get Auth Error should return the correct error state', () => {
    const state: DeepPartial<StoreSchema> = {
      auth: { error: 'Error' },
    };
    expect(getAuthError(state as StoreSchema)).toEqual('Error');
  });

  test('Get Auth Error without state should return the correct error state', () => {
    const state: DeepPartial<StoreSchema> = {};
    expect(getAuthError(state as StoreSchema)).toEqual(null);
  });
});
