import { CounterSchema } from 'entities/Counter';
import { counterReducer, counterActions } from './counter.slice';

describe('Counter Slice', () => {
  test('Increment', () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state, counterActions.increment(1))).toEqual({ value: 11 });
  });

  test('Decrement', () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state, counterActions.decrement(1))).toEqual({ value: 9 });
  });

  test('Should work with empty state', () => {
    const state: CounterSchema = undefined;

    expect(counterReducer(state, counterActions.increment(1))).toEqual({ value: 1 });
  });
});
