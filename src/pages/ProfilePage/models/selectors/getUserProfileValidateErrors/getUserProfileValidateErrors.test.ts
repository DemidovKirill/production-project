import { StoreSchema } from 'app/providers/Store';
import { getUserProfileValidateErrors } from './getUserProfileValidateErrors';
import { ValidateProfileDataError } from '../../types/profile-data-errors';

describe('Get ProfileCard Validate Error', () => {
  test('Get ProfileCard Validate Error should return the correct error state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: { validateErrors: [ValidateProfileDataError.SERVER_ERROR] },
    };
    expect(getUserProfileValidateErrors(state as StoreSchema)).toEqual([ValidateProfileDataError.SERVER_ERROR]);
  });

  test('Get ProfileCard Validate Error without state should return the correct error state', () => {
    const state: DeepPartial<StoreSchema> = {};
    expect(getUserProfileValidateErrors(state as StoreSchema)).toEqual(undefined);
  });
});
