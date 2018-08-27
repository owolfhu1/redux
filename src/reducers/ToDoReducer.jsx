import ToDoConstants from '../constants/ToDoConstants.jsx';

const initState = {
    list : []
};

export default function ToDoReducer(state=initState, action) {
    debugger;
    switch (action.type) {
        case ToDoConstants.POST_TODO : {
            let list = state.list;
            list.push({
                description : action.description,
                priority : action.priority,
                status : 'todo'
            });
            return {...state, list};
        }
        case ToDoConstants.MODIFY_TODO : {
            let list = state.list;
            list[action.index].status = list[action.index].status === 'todo' ? 'finished' : 'todo';
            return {...state, list};
        }
        case ToDoConstants.DELETE_TODO : {
            let list = state.list;
            list.splice(action.index,1);
            return {...state, list};
        }
        case ToDoConstants.POST_TODOS : {
            debugger;
            let list = state.list;
            action.todos.forEach(obj => {
                list.push({
                    description: obj.description,
                    priority: obj.priority,
                    status: obj.status,
                });
            });
            return {...state, list}
        }
    }
    return state;
}
