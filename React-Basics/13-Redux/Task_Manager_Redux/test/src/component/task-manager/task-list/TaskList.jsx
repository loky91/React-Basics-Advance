import * as React from 'react';

import TaskItem from './TaskItem';
import { connect } from 'react-redux';

class TaskList extends React.Component {

    render() {
        return (
            <React.Fragment>
                {
                    this.props.tasks.map((task, index) => {
                        return (<TaskItem task={task} key={index} />)

                    })
                }
            </React.Fragment>
        )
    }

}
function mapStateToProps(state){
    return {
        tasks: state.taskList
    }
}
export default connect(mapStateToProps)(TaskList);