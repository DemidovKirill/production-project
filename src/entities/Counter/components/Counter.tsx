import React from 'react';
import { AppButton } from 'shared/components/AppButton/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../models/slice/counter.slice';
import { getCounterValue } from '../models/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const counterValue = useSelector(getCounterValue);
  const dispatch = useDispatch();

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
