import ToDoConstants from '../constants/ToDoConstants.jsx';

export function deleteTodo(index) {
    return {
        type : ToDoConstants.DELETE_TODO,
        index
    }
}

export function postTodo(priority,description) {
    return {
        type : ToDoConstants.POST_TODO,
        priority, description
    }
}

export function postTodos(todos) {
    return {
        type : ToDoConstants.POST_TODOS,
        todos: todos
    }
}

export function modifyTodoPriority(index) {
    return {
        type : ToDoConstants.MODIFY_TODO,
        index
    }
}

export function fetchData() {
    return {
        type : ToDoConstants.FETCH,
    }
}