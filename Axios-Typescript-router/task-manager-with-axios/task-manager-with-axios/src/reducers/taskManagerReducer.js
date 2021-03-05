import {ADD_TASK, REMOVE_TASK, LOAD_TASK} from '../utils/utility';

export default function taskManagerReducer(state={taskList:[]}, action){
    switch(action.type){
        case ADD_TASK: {
            let newTask = {
                id: (state.taskList.length + 1),
                title: action.taskName
            }
            return {...state, taskList: [...state.taskList, newTask]};
        }
        case REMOVE_TASK: {
            let taskList = [...state.taskList];
            let index = taskList.findIndex(task => task.id===action.taskId);
            taskList.splice(index, 1);
            return {...state, taskList};
        }
        case LOAD_TASK: {
            let newList = action.taskList.slice(0, 10);
            return {...state, taskList: newList};
        }
        default: return state;
    }
}