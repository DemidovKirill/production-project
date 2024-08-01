import { DeepPartial } from 'app/providers/Store/index';
import { StoreSchema } from 'app/providers/Store';
import { getAuthIsLoading } from './getAuthIsLoading';

describe('Get Auth isLoading', () => {
  test('Get Auth isLoading should return the correct isLoading state', () => {
    const state: DeepPartial<StoreSchema> = {
      auth: { isLoading: true },
    };
    expect(getAuthIsLoading(state as StoreSchema)).toEqual(true);
  });

  test('Get Auth isLoading without state should return the correct isLoading state', () => {
    const state: DeepPartial<StoreSchema> = {};
    expect(getAuthIsLoading(state as StoreSchema)).toEqual(false);
  });
});
