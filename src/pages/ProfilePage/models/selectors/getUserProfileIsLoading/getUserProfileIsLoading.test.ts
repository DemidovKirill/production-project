import { StoreSchema } from 'app/providers/Store';
import { getUserProfileIsLoading } from './getUserProfileIsLoading';

describe('Get ProfileCard isLoading', () => {
  test('Get ProfileCard isLoading should return the correct error state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: { isLoading: true },
    };
    expect(getUserProfileIsLoading(state as StoreSchema)).toEqual(true);
  });

  test('Get ProfileCard isLoading without state should return the correct error state', () => {
    const state: DeepPartial<StoreSchema> = {};
    expect(getUserProfileIsLoading(state as StoreSchema)).toEqual(undefined);
  });
});
