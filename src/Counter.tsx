import React, {useState} from 'react';

export const Counter = () => {
  const [counter, incrementCounter] = useState(0);

  function handleIncrement() {
    incrementCounter(counter + 1);
  }

  return (
    <div>
        <div>{counter}</div>
        <hr/>
        <button type="button" onClick={handleIncrement}>+</button>
    </div>
  )
}


