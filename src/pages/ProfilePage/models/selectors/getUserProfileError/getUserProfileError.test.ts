import { StoreSchema } from 'app/providers/Store';
import { getUserProfileError } from './getUserProfileError';

describe('Get ProfileCard Error', () => {
  test('Get ProfileCard Error should return the correct error state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: { error: 'Error' },
    };
    expect(getUserProfileError(state as StoreSchema)).toEqual('Error');
  });

  test('Get ProfileCard Error without state should return the correct error state', () => {
    const state: DeepPartial<StoreSchema> = {};
    expect(getUserProfileError(state as StoreSchema)).toEqual(undefined);
  });
});
