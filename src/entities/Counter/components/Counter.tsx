import React from 'react';
import { AppButton } from 'shared/components/AppButton/AppButton';
import { useAppDispatch } from 'app/providers/Store';
import { useSelector } from 'react-redux';
import { counterActions } from '../models/slice/counter.slice';
import { getCounterValue } from '../models/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const counterValue = useSelector(getCounterValue);
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(counterActions.increment(1));
  };

  const decrement = () => {
    dispatch(counterActions.decrement(1));
  };

  return (
    <div>
      <h1 data-testid="counter-value">{counterValue}</h1>
      <AppButton data-testid="increment-button" onClick={increment}>Increment</AppButton>
      <br />
      <AppButton data-testid="decrement-button" onClick={decrement}>Decrement</AppButton>
    </div>
  );
};
