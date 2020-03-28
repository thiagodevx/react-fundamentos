import { combineReducers, createStore } from 'redux'
import BasicState from './BasicState'

const reducers = combineReducers({
    state: BasicState
})
export default createStore(reducers)