import * as React from 'react';
import { connect } from 'react-redux';
import { addTaskAction } from '../../../actions/TaskManagerAction';
class TaskForm extends React.Component {
    state = {
        task: ''

    }
    //to make changes to the text box
    onHandleChange = (e) => {
        this.setState({
            task: e.target.value
        });
    }

    //on click of add button
    onHandleAddClick = () => {
        this.props.addTask(this.state.task);
        this.setState({
            task: ''
        });

    }
    render() {

        return (
            <React.Fragment>
                <label>ADD TASK</label>
                <input type="text" value={this.state.task} onChange={this.onHandleChange} />
                <button type="button" onClick={this.onHandleAddClick}>ADD</button>
            </React.Fragment>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return {
        addTask: (taskName) => {
            dispatch(addTaskAction(taskName));
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskForm);