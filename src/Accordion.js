// import React, { useState } from 'react';
// // import './Accordion.css';

// export default function Accordion({ heading, content }) {
//   let [show, setShow] = useState(false);

//   return (
//     <div className="accordion-container">
//       <header>
//         <h2>{heading}</h2>
//         <button
//           className="toggle"
//           onClick={function toggle() {
//             setShow(!show);
//           }}
//         >
//           {show ? '-' : '+'}
//         </button>
//       </header>
//       <p className={show ? 'content' : 'content hidden'}>{content}</p>
//     </div>
//   );
// }

import React, { Component } from 'react';
import './Accordion.css';

export default class Accordion extends Component {
  state = {
    show: false, //default to false
  };

  render() {
    return (
      <div className="accordion-container">
        <header>
          <h2>{this.props.heading}</h2>
          <button
            className="toggle"
            onClick={() => {
              this.setState({ show: !this.state.show });
              console.log(this.state.show);
            }}
          >
            {this.state.show ? '-' : '+'}
          </button>
        </header>
        <p className={this.state.show ? 'content' : 'content hidden'}>
          {this.props.content}
        </p>
      </div>
    );
  }
}
