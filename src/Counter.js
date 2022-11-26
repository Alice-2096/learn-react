import React, { useState } from 'react';

export default function Counter({ num }) {
  let [number, setNumber] = useState(num); //useState is used to initialize the environment, it is called a hook

  function increment() {
    // number = number + 1;
    setNumber(number + 1); //this is a function to change the value of 'number'
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
