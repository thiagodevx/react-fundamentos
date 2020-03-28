export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const CHANGE_STEP = 'CHANGE_STEP'

export const incrementCounter = _ => ({
  type: INCREMENT_COUNTER
})

export const decrementCounter = _ => ({
  type: DECREMENT_COUNTER
})

export const changeStep = step => ({
  type: CHANGE_STEP,
  payload: step
})
