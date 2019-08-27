import React, { FC, useState, useEffect } from 'react';

import './Counter.scss';

interface Props {
  step: number;
  duration?: number;
}

const BetterCounter: FC<Props> = ({ step, duration }) => {
  const [count, updateCounter] = useState(0);

  const decrement = () => {
    if (count === 0) {
      return;
    }

    updateCounter(count - step);
  };

  const increment = () => {
    updateCounter(count + step);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateCounter(count + step);
    }, duration || 1000);

    return () => {
      clearInterval(interval);
    };
  }, [duration, count, step]);

  return (
    <div className="Counter">
      <h1>{count}</h1>
      <button onClick={decrement}>Azalt</button>
      <button onClick={increment}>Arttir</button>
    </div>
  );
};

export default BetterCounter;
