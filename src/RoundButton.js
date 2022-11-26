import React, { useState } from 'react';

export default function RoundButton({ label, active }) {
  let [_active, SetActive] = useState(active);

  function toggle() {
    SetActive(!_active);
  }

  return (
    <button className={_active ? 'btn active' : 'btn'} onClick={toggle}>
      {label}
    </button>
  );
}
