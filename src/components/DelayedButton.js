import React from 'react'// Code CoordinatesButton Component Here

export default class DelayedButton extends React.Component {
    handleClick = event => {
              event.persist();
              setTimeout(() => {
                this.props.onDelayedClick(event);
              }, this.props.delay);
            };
    render () {
        return (
        <button onClick={this.handleClick}>Coordinates</button> )
    }
}



// class DelayedButton extends React.Component {
//     handleClick = event => {
//       event.persist();
//       setTimeout(() => {
//         this.props.onDelayedClick(event);
//       }, this.props.delay);
//     };