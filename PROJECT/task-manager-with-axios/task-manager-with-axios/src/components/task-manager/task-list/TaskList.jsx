import * as React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import { getTaskList } from '../../../actions/taskManagerActions';

class TaskList extends React.Component{

    componentDidMount(){
        this.props.loadTask();
    }

    render(){
        return(
            <>
                {
                    this.props.tasks.map((task, index)=>{
                        return (
                            <TaskItem task={task}/>
                        )
                    })        
                }
            </>
        )
    }
}

function mapStateToProps(state){
    return {
        tasks: state.taskList
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadTask:() => dispatch(getTaskList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);