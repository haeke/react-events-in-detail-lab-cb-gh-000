// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReceiveCoordinates} />
      </div>
    );
  }
}