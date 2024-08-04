import { profileActions, profileReducer, ProfileSchema } from 'entities/Profile';

describe('Profile Slice', () => {
  test('Toggle Readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true };

    expect(profileReducer(state as ProfileSchema, profileActions.toggleReadonly(false))).toEqual({ readonly: false });
  });
});
