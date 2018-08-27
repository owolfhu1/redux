import * as ToDoActions from '../actions/ToDoActions.jsx';
import { takeEvery, put } from "redux-saga/effects";
import ToDoConstants from "../constants/ToDoConstants";

export function* _fetch() {
    yield takeEvery(ToDoConstants.FETCH, fetchTodos);
}

function* fetchTodos() {
    let toDoList = [];
    yield fetch('http://demo7465829.mockable.io/').then(response => {
        if (response.status === 200)
            response.json().then(data => {
                toDoList = data;
            }).catch(console.log)
    }).catch(console.log);
    yield put(ToDoActions.postTodos(toDoList));
}

