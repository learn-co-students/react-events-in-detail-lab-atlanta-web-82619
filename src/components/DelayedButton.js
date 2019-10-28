// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

    handleDelayedClick = (e) => {
        e.persist();
        setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
    }
    
    render(){
        return (
            <button onClick={this.handleDelayedClick} />
        )
    }
}

export default DelayedButton;