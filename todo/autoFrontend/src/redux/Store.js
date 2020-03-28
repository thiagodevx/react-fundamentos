import { combineReducers, createStore } from 'redux'
import TesteReducer from './teste/TesteReducer'

const reducers = combineReducers({
    testeState: TesteReducer
})
export default createStore(reducers)