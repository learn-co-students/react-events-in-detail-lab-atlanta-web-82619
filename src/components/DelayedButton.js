import React, { Component } from 'react'

class DelayedButton extends Component {
    clickHandler = (event) => {
        event.persist();
        setTimeout(this.props.onDelayedClick, this.props.delay, event);
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>button2</button>
            </div>
        )
    }
}

export default DelayedButton