import React, { useState } from 'react';

export default function Names({ items, onclick }) {
  return (
    <div>
      {items.map((x) => (
        <li onClick={() => onclick(x)}>{x}</li> //arrow function
      ))}
    </div>
  );
}
