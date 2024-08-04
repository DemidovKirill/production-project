import { DeepPartial } from 'app/providers/Store/index';
import { StoreSchema } from 'app/providers/Store';
import { getUserProfileError } from './getUserProfileError';

describe('Get Profile Error', () => {
  test('Get Profile Error should return the correct error state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: { error: 'Error' },
    };
    expect(getUserProfileError(state as StoreSchema)).toEqual('Error');
  });

  test('Get Profile Error without state should return the correct error state', () => {
    const state: DeepPartial<StoreSchema> = {};
    expect(getUserProfileError(state as StoreSchema)).toEqual(undefined);
  });
});
