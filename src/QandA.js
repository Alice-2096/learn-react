import React from 'react';
import Accordion from './Accordion';
import './Accordion.css';
import AccordionList from './AccordionList';

export default function QandA() {
  return (
    <div className="big-container">
      <h1 className="q-and-a">Questions and Answers About Login</h1>
      <AccordionList></AccordionList>
    </div>
  );
}
