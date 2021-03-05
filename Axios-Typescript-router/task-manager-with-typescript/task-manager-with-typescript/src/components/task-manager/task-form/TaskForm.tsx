import * as React from 'react';
import { connect } from 'react-redux';
import { addTaskAction } from '../../../actions/taskManagerActions';

class TaskForm extends React.Component<TaskFormProps, TaskFormState>{

    state = {
        task: ''
    }

    handleOnChange = (e: any) => {
        this.setState({task: e.target.value});
    }

    handleAddClick = () => {
        this.props.addTask(this.state.task);
        this.setState({task: ''});
    }

    render() {
        return (
            <>
                <label>Add Task</label><br/>
                <input type="text" value={this.state.task} onChange={(e)=>this.handleOnChange(e)} />
                <button type="button" onClick={this.handleAddClick}>Add</button>
            </>
        )
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        addTask: (taskName: string) => {
            dispatch(addTaskAction(taskName))
        } 
    }
}

interface TaskFormState {
    task: string;
}

export interface TaskFormProps {
    addTask: (task: string) => void;
}

export default connect(null, mapDispatchToProps)(TaskForm);