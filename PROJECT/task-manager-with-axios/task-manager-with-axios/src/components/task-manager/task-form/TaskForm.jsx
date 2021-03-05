import * as React from 'react';
import { connect } from 'react-redux';
import { addTaskAction } from '../../../actions/taskManagerActions';

class TaskForm extends React.Component{

    state = {
        task: ''
    }

    handleOnChange = (e) => {
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

function mapDispatchToProps(dispatch) {
    return {
        addTask: (taskName) => {
            dispatch(addTaskAction(taskName))
        } 
    }
}

export default connect(null, mapDispatchToProps)(TaskForm);