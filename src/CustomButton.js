import React, { useState } from 'react';

export default function CustomButton({ text }) {
  let [orange, setNumber] = useState(1);
  let [btnClassName, setBtnClassName] = useState('custom-orange-button');

  function toggle() {
    if (orange === 0) {
      setNumber(1);
      setBtnClassName('custom-orange-button');
    } else {
      setNumber(0);
      setBtnClassName('custom-green-button');
    }
  }

  return (
    <div className={btnClassName} onClick={toggle}>
      {text}
    </div>
  );
}

// export default function CustomButton({ text, isOrange }) {
//   const [active, setActive] = useState(isOrange);

//   function toggle() {
//     if (active == true) {
//       setActive(false);
//     } else {
//       setActive(true);
//     }
//   }

//   return (
//     <div onClick={toggle} className={active ? "custom-orange-button" : "custom-green-button"}>
//       {text}
//     </div>
//   );
// }
