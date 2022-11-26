import React, { useState } from 'react';

export default function Zoom({ name, speaking }) {
  let [_speaking, setSpeaking] = useState(speaking);

  return (
    <div className="zoom-container">
      <span className="name bigfont">{name}</span>
      <div className="bottom-left-name-bar">
        <i
          class={
            _speaking
              ? 'fa-solid fa-microphone-lines'
              : 'fa-regular fa-microphone-lines-slash'
          }
          onClick={function toggle() {
            setSpeaking(!_speaking);
          }}
        ></i>
        <span className="name">{name}</span>
      </div>
    </div>
  );
}
