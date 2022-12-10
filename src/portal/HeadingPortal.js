import React from 'react';
import ReactDOM from 'react-dom';

export default function HeadingPortal() {
  return ReactDOM.createPortal(
    <span>I am React Portal</span>,
    document.getElementById('outside-header')
  );
}
