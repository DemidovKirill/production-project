import React from 'react';
import { AppButton } from 'shared/components/AppButton/AppButton';
import { useAppDispatch } from 'app/providers/Store';
import { useSelector } from 'react-redux';
import { counterActions } from '../models/slice/counter-slice';
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

  const customValue = () => {
    const value = prompt();
    dispatch(counterActions.incrementByAmount(+value));
  };

  return (
    <div>
      <h1>
        Value =
        {' '}
        {counterValue}
      </h1>
      <AppButton onClick={increment}>Increment</AppButton>
      <br />
      <AppButton onClick={decrement}>Decrement</AppButton>
      <br />
      <AppButton onClick={customValue}>Custom Value</AppButton>
    </div>
  );
};
