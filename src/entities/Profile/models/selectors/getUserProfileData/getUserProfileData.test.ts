import { DeepPartial } from 'app/providers/Store/index';
import { StoreSchema } from 'app/providers/Store';
import { profileInitialState } from 'entities/Profile';
import { getUserProfileData } from './getUserProfileData';

describe('Get Profile Data', () => {
  test('Get Profile Data should return the correct profile data state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: {
        profileData: null,
      },
    };
    expect(getUserProfileData(state as StoreSchema)).toEqual(null);
  });

  test('Get Profile Data without state should return the correct state', () => {
    const state: DeepPartial<StoreSchema> = {};
    expect(getUserProfileData(state as StoreSchema)).toEqual(undefined);
  });
});
