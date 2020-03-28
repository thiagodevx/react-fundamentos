import { combineReducers, createStore } from 'redux'
import TesteReducer from '../teste/TesteReducer'
import CounterReducer from '../counter/CounterReducer'
import TodoReducer from '../todo/TodoReducer'

const reducers = combineReducers({
  counterState: CounterReducer,
  testeState: TesteReducer,
  todoState: TodoReducer
})
export default createStore(reducers)
