import React from 'react';

export default function Counter({ num }) {
  return (
    <div className="counter">
      <span className="sign">-</span>
      <span className="num">{num}</span>
      <span className="sign">+</span>
    </div>
  );
}
