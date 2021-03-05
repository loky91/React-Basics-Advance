import * as React from 'react';
import TaskForm from './task-form/TaskForm';
import TaskList from './task-list/TaskList';

class TaskManager extends React.Component {
    state = {
        taskList: [
            {
                id: 0,
                name: 'lokendra'

            },
            {
                id: 1,
                name: 'yadav'

            }
        ],
        taskTitle: ''
    };

    //adding the task and updating to the task
    addTaskToList = (taskName) => {
        let newTask = {
            id: (this.state.taskList.length + 1),
            name: taskName
        }
        let taskList = [...this.state.taskList];
        taskList.push(newTask);
        this.setState({ taskList, taskTitle: '' });
    }

    //removing the item from the Task List
    removeTaskFromList = (id) => {
        let taskList = [...this.state.taskList];
        let index = taskList.findIndex((item => item.id===id));
        taskList.slice(index, 1);
        this.setState({taskList});
    }

    updateName=(id, value)=>{
        let taskList = [...this.state.taskList];
        let index = taskList.findIndex((item => item.id===id));
        taskList.splice(index, 1);
        this.setState({taskList, taskTitle: value});
    }


    render() {

        return (
            <React.Fragment>
                <TaskForm addTask={this.addTaskToList} updateName={this.state.taskTitle}/>
                <TaskList tasks={this.state.taskList} remove={this.removeTaskFromList} update={this.updateName} edit={this.state.editName}/>
            </React.Fragment>
        );
    }

}
export default TaskManager;