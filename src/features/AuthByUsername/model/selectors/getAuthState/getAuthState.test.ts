import { DeepPartial } from 'app/providers/Store/index';
import { StoreSchema } from 'app/providers/Store';
import { authSchemaInitialState } from 'features/AuthByUsername/model/slice/auth.slice';
import { getAuthState } from './getAuthState';

describe('Get Auth State', () => {
  test('Get Auth State should return the correct counter state', () => {
    const state: DeepPartial<StoreSchema> = {
      auth: { username: 'name', password: '123' },
    };
    expect(getAuthState(state as StoreSchema)).toEqual({ username: 'name', password: '123' });
  });

  test('Get Auth State without state should return the correct state', () => {
    const state: DeepPartial<StoreSchema> = {};
    expect(getAuthState(state as StoreSchema)).toEqual(authSchemaInitialState);
  });
});
