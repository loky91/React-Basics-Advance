import { ADD_TASK, REMOVE_TASK } from "../utils/Actiontypes";

export function Taskreducer(state=[],action){

switch(action.type){
case ADD_TASK:
//add the task
console.log(action.taskTitle);
const newTask={
    id: state.length+1,
    title: action.taskTitle,
    completed: false,
    date: new Date()

}

return[
    ...state,
    newTask
];
case REMOVE_TASK:



let i=-1;
state.forEach((task,index)=>{
if(action.id === task.id){
i=index;
                         }
                            });
                            
return[
    ...state.slice(0,i),
    ...state.slice(i+1)
]

default:
return state;

}


}