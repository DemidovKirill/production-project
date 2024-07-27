import { getCounter } from 'entities/Counter/models/selectors/getCounter/getCounter';
import { DeepPartial } from 'app/providers/Store/index';
import { StoreSchema } from 'app/providers/Store';

describe('Get Counter', () => {
  test('Get Counter should return the correct counter state', () => {
    const state: DeepPartial<StoreSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StoreSchema)).toEqual({ value: 10 });
  });
});
