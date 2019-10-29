import React, { Component } from 'react'

class CoordinatesButton extends Component {
    clickHandler = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>button</button>
            </div>
        )
    }
}

export default CoordinatesButton