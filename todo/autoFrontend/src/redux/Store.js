import { combineReducers, createStore } from 'redux'
import TesteReducer from '../teste/TesteReducer'
import CounterReducer from '../counter/CounterReducer'
import TodoReducer from '../todo/TodoReducer'
import ClickReducer from '../click/ClickReducer'
import GrupoReducer from '../grupo/GrupoReducer'

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const reducers = combineReducers({
  counterState: CounterReducer,
  testeState: TesteReducer,
  todoState: TodoReducer,
  clickState: ClickReducer,
  grupoState: GrupoReducer,
})
export default createStore(reducers, devTools)
