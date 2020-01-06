import React, {Component} from 'react'

class Cell extends Component{
  constructor(props){
    super()
    this.state = {
      color: props.value
    }
  }
  doClick = ()=> {
    this.setState({
      color: '#333'
    })
  }
  render(){
    return (
      <div className='cell'
        style={{backgroundColor: this.state.color}}
        onClick={this.doClick}
        ></div>
    )
  }
}

export default Cell
