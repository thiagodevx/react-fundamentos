import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter } from '../redux/counter/CounterActions';

const Counter = props => (
  <div>
    <h1>{props.count}</h1>
    <button onClick={props.incrementCounter}>Click</button>
  </div>
);

const mapStateToProps = state => ({
  count: state.counterState.count
});

const mapDispatchToProps = {
  incrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
