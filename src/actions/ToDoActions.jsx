import ToDoConstants from '../constants/ToDoConstants.jsx';

export function postTodo(priority,description) {
    return {
        type : ToDoConstants.POST_TODO,
        priority, description
    }
}

export function modifyTodoPriority(index) {
    return {
        type : ToDoConstants.MODIFY_TODO,
        index
    }
}