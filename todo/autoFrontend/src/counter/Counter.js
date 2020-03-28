import React from 'react'
import { connect } from 'react-redux'
import {
  incrementCounter,
  decrementCounter,
  changeStep
} from '../redux/counter/CounterActions'

const Counter = props => (
  <div>
    <h1>{props.count}</h1>
    <input onChange={props.changeStep} value={props.step} type="number"></input>
    <button onClick={props.decrementCounter}>-</button>
    <button onClick={props.incrementCounter}>+</button>
  </div>
)

const mapStateToProps = state => ({
  count: state.counterState.count,
  step: state.counterState.step
})

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
  changeStep
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
