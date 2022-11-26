import React, { Fragment } from 'react';

//the fst argument is a string, the sec is an array
export default function Product({ title, spec }) {
  return (
    <div className="product">
      <h2>{title}</h2>
      <ul>
        {spec.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
}
