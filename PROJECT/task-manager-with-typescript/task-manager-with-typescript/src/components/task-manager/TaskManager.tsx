import * as React from 'react';
import TaskForm from './task-form/TaskForm'
import TaskList from './task-list/TaskList';

class TaskManager extends React.Component {
    render(){
        return(
            <React.Fragment>
                <TaskForm />
                <TaskList />
            </React.Fragment>
        )
    }
}

export default TaskManager;