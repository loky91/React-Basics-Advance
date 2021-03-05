import * as React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import { getTaskList } from '../../../actions/taskManagerActions';
import {TaskProps} from '../task-list/TaskItem';

class TaskList extends React.Component<TaskListProps, any>{

    componentDidMount(){
        this.props.loadTask();
    }

    render(){
        return(
            <>
                {
                    this.props.tasks.map((task: TaskProps, index: number)=>{
                        return (
                            <TaskItem task={task} key={index} />
                        )
                    })        
                }
            </>
        )
    }
}

interface TaskListProps {
    loadTask: () => void;
    tasks: TaskProps[];
}

function mapStateToProps(state: any){
    return {
        tasks: state.taskList as TaskProps[]
    }
}

function mapDispatchToProps(dispatch: any){
    return {
        loadTask:() => dispatch(getTaskList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);