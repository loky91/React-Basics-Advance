import {ADD_TASK, REMOVE_TASK, LOAD_TASK} from '../utils/utility';
import axios from 'axios';
import {TaskProps} from '../components/task-manager/task-list/TaskItem';

export function addTaskAction(taskName: string){
    return {
        type: ADD_TASK,
        taskName: taskName
    }
}

export function removeTaskAction(taskId: number){
    return {
        type: REMOVE_TASK,
        taskId: taskId
    }
}

function loadTaskAction(taskList: TaskProps[]){
    return {
        type: LOAD_TASK,
        taskList: taskList
    }
}

export function getTaskList(){
    return (dispatch: any) => axios.get('https://jsonplaceholder.typicode.com/todos').then(function(response){
        return dispatch(loadTaskAction(response.data as TaskProps[]));
    })
}
