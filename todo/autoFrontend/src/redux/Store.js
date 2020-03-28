import { combineReducers, createStore } from 'redux'
import BasicReducer from './BasicReducer'
import TesteReducer from './teste/TesteReducer'

const reducers = combineReducers({
    state: BasicReducer,
    testeState: TesteReducer
})
export default createStore(reducers)