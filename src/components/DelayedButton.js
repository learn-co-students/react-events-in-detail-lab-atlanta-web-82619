// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component {
    handleClick = (e) => {
        e.persist()
        setTimeout( () => {
            this.props.delay
            this.props.onDelayedClick(e)
        })
    }

    render() {
        return <button onClick={this.handleClick}></button>
    }
}
