import { StoreSchema } from 'app/providers/Store';
import { getUserProfileFormData } from './getUserProfileFormData';

describe('Get ProfileCard From Data', () => {
  test('Get ProfileCard From Data should return the correct profile form data state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: {
        formData: null,
      },
    };
    expect(getUserProfileFormData(state as StoreSchema)).toEqual(null);
  });

  test('Get ProfileCard Data without state should return the correct state', () => {
    const state: DeepPartial<StoreSchema> = {};
    expect(getUserProfileFormData(state as StoreSchema)).toEqual(undefined);
  });
});
