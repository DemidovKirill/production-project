import { profileActions, profileReducer } from '../slice/profile.slice';
import { ProfileSchema } from '../types/profile-schema';

describe('ProfileCard Slice', () => {
  test('Toggle Readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true };

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false))).toEqual({ readonly: false });
  });
});
