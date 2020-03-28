import { INCREMENT_COUNTER } from './CounterActions';

const initialState = {
  count: 0
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT_COUNTER:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};
