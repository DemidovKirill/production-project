import React, {useState} from 'react';
import style from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count+1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button className={style.button} onClick={incrementCount}>Increment</button>
    </div>
  );
};
