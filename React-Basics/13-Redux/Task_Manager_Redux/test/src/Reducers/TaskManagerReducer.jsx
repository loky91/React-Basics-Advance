import { ADD_TASK,REMOVE_TASK } from "../utils/Utils";

export default function TaskManagerReducer(state={taskList:[]},action){
switch(action.type){

case ADD_TASK:{
let newTask={
    id:(state.taskList.length+1),
    name:action.taskName
}
return {...state,taskList:[...state.taskList,newTask]};

}

case REMOVE_TASK:{
    let taskList=[...state.taskList];
    
let index=taskList.findIndex(task=>task.id===task.taskid);
taskList.splice(index,1);
return{...state,taskList}

}
default: return state;
}
}