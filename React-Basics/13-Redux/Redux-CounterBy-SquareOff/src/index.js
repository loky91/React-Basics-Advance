import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Calculator from './components/Calculator'
import calculator from './reducers'

const store = createStore(calculator)
const rootEl = document.getElementById('calculator')

const render = () => ReactDOM.render(
  <Calculator
    value={store.getState()}
    onSquare={() => store.dispatch({ type: 'SQUARE' })}
    onDouble={() => store.dispatch({ type: 'DOUBLE' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)