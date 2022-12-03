import React, { useState } from 'react';

export default function Button() {
  let [btnState, setNumber] = useState(0); //useState is used to initialize the environment, it is called a hook

  //can use setLable to set text/string

  function toggle() {
    if (btnState === 0) {
      setNumber(1);
    } else {
      setNumber(0);
    }
  }

  return (
    <div className="btn">
      <button onClick={toggle}>Click</button>
      <span>{btnState ? 'on' : 'off'}</span>
    </div>
  );
}
