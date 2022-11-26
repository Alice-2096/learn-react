import React from 'react';
import Accordion from './Accordion.js';

export default function AccordionList() {
  //fetch data from API, but we hardcode it for now.
  let questions = [
    {
      heading: 'Do i have to allow the use of cookies?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis, orci eget fermentum hendrerit, tellus ligula sagittis ligula, ut consequat mi purus ac massa. ',
    },
    {
      heading: 'How do I change my page password?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis, orci eget fermentum hendrerit, tellus ligula sagittis ligula, ut consequat mi purus ac massa. ',
    },
    {
      heading: 'What is bankID?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis, orci eget fermentum hendrerit, tellus ligula sagittis ligula, ut consequat mi purus ac massa. ',
    },
  ];

  return (
    <div className="accordion-list">
      {questions.map((x) => (
        <Accordion heading={x.heading} content={x.content}></Accordion>
      ))}
    </div>
  );
}
