import * as React from 'react';
import {connect} from 'react-redux';
import {removeTaskAction} from '../../../actions/TaskManagerAction';

class TaskItem extends React.Component{
render(){
    return(
        <React.Fragment>
        <li>
            {
                this.props.task.name
            }
            <button type="button" onClick={()=>{this.props.delete(this.props.id)}}>x</button>
            </li>
            </React.Fragment>
    )
}


}

function mapDispatchToProps(dispatch){
    return {
        delete: (id) => {
            dispatch(removeTaskAction(id))
        }
    }
}

export default connect(null,mapDispatchToProps)(TaskItem);
