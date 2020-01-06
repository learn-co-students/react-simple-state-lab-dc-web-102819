import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}


function genDefaultArray() {
  const defaultRed = '#F00'
  
  let innerArray = new Array(10)
  innerArray.fill(defaultRed)

  let matrixArray = new Array(10)
  matrixArray.fill(innerArray)

  return matrixArray
}


Matrix.defaultProps = {
  values: genDefaultArray()
}
