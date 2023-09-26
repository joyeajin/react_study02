import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

const AppCounter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);

  return (
    <div>
      <div className="banner">
        total count: {count} {count > 10 ? 'ss' : 'dd'}
      </div>
      <div className="counters">
        <Counter total={count} onClick={handleClick} />
        <Counter total={count} onClick={handleClick} />
      </div>
    </div>
  );
};

export default AppCounter;
