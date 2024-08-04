import { DeepPartial } from 'app/providers/Store/index';
import { StoreSchema } from 'app/providers/Store';
import { getUserProfileReadonly } from './getUserProfileReadonly';

describe('Get Profile Readonly', () => {
  test('Get Profile Readonly should return the correct error state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: { readonly: true },
    };
    expect(getUserProfileReadonly(state as StoreSchema)).toEqual(true);
  });

  test('Get Profile Readonly without state should return the correct error state', () => {
    const state: DeepPartial<StoreSchema> = {};
    expect(getUserProfileReadonly(state as StoreSchema)).toEqual(undefined);
  });
});
