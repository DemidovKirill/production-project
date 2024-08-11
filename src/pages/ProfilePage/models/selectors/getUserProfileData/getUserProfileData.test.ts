import { StoreSchema } from 'app/providers/Store';
import { getUserProfileData } from './getUserProfileData';

describe('Get ProfileCard Data', () => {
  test('Get ProfileCard Data should return the correct profile data state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: {
        profileData: null,
      },
    };
    expect(getUserProfileData(state as StoreSchema)).toEqual(null);
  });

  test('Get ProfileCard Data without state should return the correct state', () => {
    const state: DeepPartial<StoreSchema> = {};
    expect(getUserProfileData(state as StoreSchema)).toEqual(undefined);
  });
});
