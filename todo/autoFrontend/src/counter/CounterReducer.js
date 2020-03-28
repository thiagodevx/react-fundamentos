import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  CHANGE_STEP
} from './CounterActions'

const initialState = {
  count: 0,
  step: 1
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT_COUNTER:
      return { ...state, count: state.count + state.step }
    case DECREMENT_COUNTER:
      return { ...state, count: state.count - state.step }
    case CHANGE_STEP:
      return { ...state, step: payload }
    default:
      return state
  }
}
