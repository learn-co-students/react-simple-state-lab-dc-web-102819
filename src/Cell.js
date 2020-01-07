import React from 'react'

export default class Cell extends React.Component {

    constructor(props) {
        debugger
        super()
        this.state = {
            color: props.value
        }
    }

    manageClick = () => {
        this.setState({
            color: '#333'     
        })
    }

    render() {
        return (
        <div 
            className='cell' 
            style={{backgroundColor: this.state.color}}
            onClick={this.manageClick}>
        </div>
        )
    }
}