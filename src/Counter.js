import React, { useState } from 'react';

export default function Counter({ num }) {
  let [number, setNumber] = useState(num); //useState is used to initialize the environment, it is called a hook

  function increment() {
    // number = number + 1;
    setNumber(number + 1); //this is a function to change the value of 'number'

    //setNumber is async function. this means that if we repeat setNumber(number + 1) twice, the counter will go up by 1. The reason is that 'number' will be initialized to 0 in both function...
    //repeat setNumber(x => x + 1) twice will let counter go up by 2.
  }

  function decrement() {
    setNumber(number - 1);
  }

  return (
    <div className="counter">
      <button className="sign">-</button>
      <span className="num">{number}</span>
      <buttom className="sign" onClick={increment()}>
        +
      </buttom>
    </div>
  );
}
