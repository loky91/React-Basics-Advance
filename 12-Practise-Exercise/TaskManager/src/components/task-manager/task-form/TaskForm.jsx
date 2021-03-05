import * as React from 'react';

class TaskForm extends React.Component {
    state = {
        task: ''
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps.updateName);
        this.setState({ task: newProps.updateName })
    }

    onhandleChange = (e) => {
        this.setState({
            task: e.target.value
        });
    };

    onAddClick = () => {
        this.props.addTask(this.state.task);
        this.setState({task: ''});
    }


    render() {
        return (
            <React.Fragment>
                <input type="text" value={this.state.task} onChange={this.onhandleChange} />
                <button type="button" onClick={this.onAddClick}>
                    ADD
    </button>
            </React.Fragment>

        );

    }

}
export default TaskForm;