import { getCounter } from 'entities/Counter/models/selectors/getCounter/getCounter';
import { DeepPartial } from 'app/providers/Store/index';
import { StoreSchema } from 'app/providers/Store';

describe('Get Auth State', () => {
  test('Get Auth State should return the correct counter state', () => {
    const state: DeepPartial<StoreSchema> = {
      auth: { username: 'name', password: '123' },
    };
    expect(getCounter(state as StoreSchema)).toEqual({ username: 'name', password: '123' });
  });
});
