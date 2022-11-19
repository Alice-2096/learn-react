import React from 'react';

export default function CustomButton({ text, isOrange }) {
  return (
    <div className={isOrange ? 'custom-orange-button' : 'custom-green-button'}>
      {/* conditionally rendering */}
      {text}
    </div>
  );
}
