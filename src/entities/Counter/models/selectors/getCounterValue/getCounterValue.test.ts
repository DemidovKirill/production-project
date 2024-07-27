import { DeepPartial } from 'app/providers/Store/index';
import { StoreSchema } from 'app/providers/Store';
import { getCounterValue } from './getCounterValue';

describe('Get Counter Value', () => {
  test('Get Counter should return the correct counter value', () => {
    const state: DeepPartial<StoreSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StoreSchema)).toEqual(10);
  });
});
