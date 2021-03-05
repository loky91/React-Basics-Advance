import * as React from 'react';
import { connect } from 'react-redux';
import { removeTaskAction } from '../../../actions/taskManagerActions';

function TaskItem(props: TaskItemProps){
    return(
        <li>
            {props.task.title}
            <button type="button" onClick={()=>props.delete(props.task.id)}>x</button>
        </li>
    )
}

interface TaskItemProps {
    task: TaskProps;
    delete: (id: number) => void;
}

export interface TaskProps {
    title: string;
    id: number;
}

function mapDispatchToProps(dispatch: any){
    return {
        delete: (id: number) => {
            dispatch(removeTaskAction(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskItem);