import React, { Component } from 'react';

export default class Tiktoc extends Component {
  state = {
    label: 'OFF',
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.state.label == 'ON'
              ? this.setState({ label: 'OFF' })
              : this.setState({ label: 'ON' });
          }}
        >
          Click
        </button>
        <span>{this.state.label}</span>
      </div>
    );
  }
}
