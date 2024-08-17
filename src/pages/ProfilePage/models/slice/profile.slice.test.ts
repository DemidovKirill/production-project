import { Currency } from 'entities/CurrencySelect';
import { Country } from 'entities/CountrySelect';
import { ValidateProfileDataError } from 'pages/ProfilePage';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from '../slice/profile.slice';
import { ProfileSchema } from '../types/profile-schema';

const data = {
  firstname: 'Кирилл',
  lastname: 'Демидов',
  age: 25,
  currency: Currency.EUR,
  country: Country.USA,
  city: 'Moscow',
  username: 'admin',
  avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
};

describe('ProfileCard Slice', () => {
  test('Set Readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true };

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false)))
      .toEqual({ readonly: false });
  });

  test('Update Profile', () => {
    const state: DeepPartial<ProfileSchema> = { formData: { firstname: '123' } };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({
        firstname: 'Dany',
      }),
    ))
      .toEqual({
        formData: { firstname: 'Dany' },
      });
  });

  test('Update Profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileDataError.SERVER_ERROR],
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending(''),
    ))
      .toEqual({
        isLoading: true,
        validateErrors: [],
      });
  });

  test('Update Profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, ''),
    ))
      .toEqual({
        readonly: true,
        isLoading: false,
        validateErrors: [],
        formData: data,
        profileData: data,
      });
  });

  test('Cancel Profile Editing', () => {
    const state: DeepPartial<ProfileSchema> = { profileData: data, formData: { firstname: '' } };

    expect(profileReducer(state as ProfileSchema, profileActions.cancelProfileEditing()))
      .toEqual({
        profileData: data, formData: data, readonly: true, validateErrors: [],
      });
  });
});
