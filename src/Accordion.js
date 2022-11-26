import React, { useState } from 'react';
// import './Accordion.css';

export default function Accordion({ heading, content }) {
  let [show, setShow] = useState(false);

  return (
    <div className="accordion-container">
      <header>
        <h2>{heading}</h2>
        <button
          className="toggle"
          onClick={function toggle() {
            setShow(!show);
          }}
        >
          {show ? '-' : '+'}
        </button>
      </header>
      <p className={show ? 'content' : 'content hidden'}>{content}</p>
    </div>
  );
}
