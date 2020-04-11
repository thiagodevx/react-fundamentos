import { combineReducers, createStore, applyMiddleware } from 'redux'
import TesteReducer from '../teste/TesteReducer'
import CounterReducer from '../counter/CounterReducer'
import TodoReducer from '../todo/TodoReducer'
import ClickReducer from '../click/ClickReducer'
import GrupoReducer from '../grupo/GrupoReducer'
import reduxPromise from 'redux-promise'
import reduxMulti from 'redux-multi'

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducers = combineReducers({
  counterState: CounterReducer,
  testeState: TesteReducer,
  todoState: TodoReducer,
  clickState: ClickReducer,
  grupoState: GrupoReducer
})

export default applyMiddleware(reduxPromise, reduxMulti)(createStore)(
  reducers,
  devTools
)
