import React, { Component } from 'react';

export default class CounterWithClass extends Component {
  //'props' is the object passed from parent
  //state is a reserved variable inside the class component, can be modified by user interaction
  state = { start: this.props.start }; //call setState so that we can save and change data

  constructor(props) {
    //this will get executed at the time of creation of the object of the class
    super(props); //pass props to parent
  }

  //ALWAYS use arrow functions
  increment = () => {
    this.setState({ start: this.state.start + 1 }); //can pass partial object as
  };
  decrement = () => {
    this.setState({ start: this.state.start - 1 });
  };

  //return //use arrow functions
  increment = () => {
    this.setState({ start: this.state.start + 1 });
  };
  decrement = () => {
    this.setState({
      start: this.state.start - 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button> {this.state.start}{' '}
        <button onClick={this.increment}>+</button>
      </div>
    ); //must use 'this' to refer to class object
  }
}
