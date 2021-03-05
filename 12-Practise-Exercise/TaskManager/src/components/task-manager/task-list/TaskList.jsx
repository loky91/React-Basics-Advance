import * as React from 'react';
import TaskItem from './task-item/TaskItem';
class TaskList extends React.Component {
    render() {

        return (
            <React.Fragment>
                {
                    this.props.tasks.map((task, index) => {
                        return (
                            <TaskItem key={index} oneTask={task} delete={this.props.remove} updateItem={this.props.update}  />
                        )
                    })

                }
            </React.Fragment>
        )

    }

}
export default TaskList;