import axios from 'axios'

const initialState = {
    description: '',
    todoList: []
}
const urlTodo = 'http://localhost:3003/api/todos'

const getInitialState = () => initialState