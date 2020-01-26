import React from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../actions/counterActions';

import Counter from './Counter';

const CounterContainer = (props) => {
  const increment = () => {
    const { dispatch } = props;
    dispatch(incrementCount());
  };

  const decrement = () => {
    const { dispatch } = props;
    dispatch(decrementCount());
  };

  const incrementIfOdd = () => {
    const { dispatch } = props;
    if (props.count % 2) {
      dispatch(incrementCount());
    }
  };

  const incrementIfEven = () => {
    const { dispatch } = props;
    if (!(props.count % 2)) {
      dispatch(incrementCount());
    }
  };

  const delayedIncrement = () => {
    const { dispatch } = props;
    setTimeout(() => {
      dispatch(incrementCount());
    }, 2000);
  };

  const { count } = props;

  return (
    <Counter
      value={count}
      onIncrement={increment}
      onDecrement={decrement}
      onIncrementIfOdd={incrementIfOdd}
      onIncrementIfEven={incrementIfEven}
      onDelayedIncrement={delayedIncrement}
    />
  );
}

// The component is connected to the redux store
export default connect(state => state)(CounterContainer);
