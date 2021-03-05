import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Calculator extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onSquare: PropTypes.func.isRequired,
    onDouble: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

  render() {
    const { value, onSquare, onDouble, onDecrement } = this.props
    return (
      <p>
        Current Value: {value} 
        {' '}
        <button onClick={onSquare}>
          square
        </button>
        {' '}
        <button onClick={onDouble}>
         double
        </button>  
        {' '}
        <button onClick={onDecrement}>
         decrement by 1
        </button>    
      </p>
    )
  }
}

export default Calculator