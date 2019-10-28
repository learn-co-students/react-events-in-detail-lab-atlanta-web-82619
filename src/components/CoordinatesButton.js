// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {
  handleClick = (e) => {
    const arr = [e.clientX, e.clientY];
    this.props.onReceiveCoordinates(arr)

  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} ></button>
      </div>
    )
  }

}

export default CoordinatesButton;