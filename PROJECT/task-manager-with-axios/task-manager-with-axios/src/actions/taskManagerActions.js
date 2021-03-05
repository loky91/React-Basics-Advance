import {ADD_TASK, REMOVE_TASK, LOAD_TASK} from '../utils/utility';
import axios from 'axios';

export function addTaskAction(taskName){
    return {
        type: ADD_TASK,
        taskName: taskName
    }
}

export function removeTaskAction(taskId){
    return {
        type: REMOVE_TASK,
        taskId: taskId
    }
}

function loadTaskAction(taskList){
    return {
        type: LOAD_TASK,
        taskList: taskList
    }
}

export function getTaskList(){
    return (dispatch) => axios.get('https://jsonplaceholder.typicode.com/todos').then(function(response){
        return dispatch(loadTaskAction(response.data));
    })
}
