import { DeepPartial } from 'app/providers/Store/index';
import { StoreSchema } from 'app/providers/Store';
import { getUserProfileIsLoading } from './getUserProfileIsLoading';

describe('Get Profile isLoading', () => {
  test('Get Profile isLoading should return the correct error state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: { isLoading: true },
    };
    expect(getUserProfileIsLoading(state as StoreSchema)).toEqual(true);
  });

  test('Get Profile isLoading without state should return the correct error state', () => {
    const state: DeepPartial<StoreSchema> = {};
    expect(getUserProfileIsLoading(state as StoreSchema)).toEqual(undefined);
  });
});
