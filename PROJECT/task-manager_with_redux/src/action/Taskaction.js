import {ADD_TASK, REMOVE_TASK} from '../utils/Actiontypes';
import axios from 'axios';

const apiurl="https://jsonplaceholder.typicode.com/todos";

export function addTaskAction(taskTitle){
return{
    type: ADD_TASK,
    taskTitle
}

}

export function removeTaskAction(id){
return{
type: REMOVE_TASK,
id

}

}


//for middle ware
export function getTasks(){
    return (dispatch)=>{
 axios.get(apiurl).then((data) =>{
     console.log(data);
 }
 
 )
    } 
 }
