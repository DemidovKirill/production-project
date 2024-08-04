import { authActions, authReducer, AuthSchema } from 'features/AuthByUsername';

describe('Auth Slice', () => {
  test('Set Username', () => {
    const state: DeepPartial<AuthSchema> = { username: 'admin' };

    expect(authReducer(state as AuthSchema, authActions.setUsername('new_admin'))).toEqual({ username: 'new_admin' });
  });

  test('Set Password', () => {
    const state: DeepPartial<AuthSchema> = { password: '123' };

    expect(authReducer(state as AuthSchema, authActions.setPassword('000'))).toEqual({ password: '000' });
  });
});
