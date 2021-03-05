import {ADD_TASK,REMOVE_TASK} from '../utils/Utils';

export function addTaskAction(taskName){
return{
    type:ADD_TASK,
    taskName:taskName
}

}

export function removeTaskAction(taskid){
return{
    type:REMOVE_TASK,
    taskid:taskid
}

}