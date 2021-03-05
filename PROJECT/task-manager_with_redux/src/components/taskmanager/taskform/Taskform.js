import React,{Component} from 'react';
import {Form,Button} from 'semantic-ui-react';
import { connect } from 'react-redux';
        import {addTaskAction} from '../../../action/Taskaction';

class Taskform extends Component{

constructor(props){
    super(props);
this.state={
    taskInput: ''
}
}

addTask=()=>{
console.log(this.state.taskInput);
this.props.add(this.state.taskInput);
this.setState({
    taskInput: ''
})

}

handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
}
render(){
return(
    <Form>
<Form.Field>
<label htmlFor="task">Add task</label>
<input type="test" name="taskInput" id="task" onChange={this.handleChange} value={this.state.taskInput}/>
</Form.Field>
<Button primary onClick={this.addTask}>Add</Button>
</Form>
);

}

}
function mapDispatchToProps(dispatch){// dispatch is same as store.dispatch
return{
    add :(taskTitle) => {
        dispatch(addTaskAction(taskTitle));
            }

}
}



//export default Taskform;
export default connect(null,mapDispatchToProps)(Taskform);
