import { StoreSchema } from 'app/providers/Store';
import { getUserProfileReadonly } from './getUserProfileReadonly';

describe('Get ProfileCard Readonly', () => {
  test('Get ProfileCard Readonly should return the correct error state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: { readonly: true },
    };
    expect(getUserProfileReadonly(state as StoreSchema)).toEqual(true);
  });

  test('Get ProfileCard Readonly without state should return the correct error state', () => {
    const state: DeepPartial<StoreSchema> = {};
    expect(getUserProfileReadonly(state as StoreSchema)).toEqual(undefined);
  });
});
