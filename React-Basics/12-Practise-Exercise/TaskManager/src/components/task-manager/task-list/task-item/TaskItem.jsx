import * as React from 'react';
class TaskItem extends React.Component{
    state = {
       taskValue: this.props.oneTask.name,
       editable: false
    }

    onhandleChange = (e) => {
        this.setState({
            taskValue: e.target.value
        });
    };

    onEditClick = (e) => {
        let localState = {...this.state}
        if(localState.editable === false){
            localState.editable = true;
        } else{
            //localState.editable = true;
        }
        this.setState(localState);
    };

    render(){
        return(
            <li>
                {this.state.editable ? <input type="text" value={this.state.taskValue} onChange={this.onhandleChange}  /> : <label>{this.state.taskValue}</label>}
                <button type="button" onClick={()=>this.props.delete(this.props.oneTask.id)}>DELETE</button>
                <button type="button" onClick={()=>this.props.updateItem(this.props.oneTask.id, this.state.taskValue)}>UPDATE</button>
                <button type="button" onClick={this.onEditClick}>EDIT</button>
                
            </li>
        )
    }


}

export default TaskItem;
