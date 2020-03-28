import { combineReducers, createStore } from 'redux';
import TesteReducer from './teste/TesteReducer';
import CounterReducer from './counter/CounterReducer';

const reducers = combineReducers({
  counterState: CounterReducer,
  testeState: TesteReducer
});
export default createStore(reducers);
