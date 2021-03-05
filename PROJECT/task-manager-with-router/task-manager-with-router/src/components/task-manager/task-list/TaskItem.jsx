import * as React from 'react';
import { connect } from 'react-redux';
import { removeTaskAction } from '../../../actions/taskManagerActions';

function TaskItem(props){
    return(
        <li>
            {props.task.title}
            <button type="button" onClick={()=>props.delete(props.task.id)}>x</button>
        </li>
    )
}

function mapDispatchToProps(dispatch){
    return {
        delete: (id) => {
            dispatch(removeTaskAction(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskItem);