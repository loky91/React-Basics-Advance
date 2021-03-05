import React from 'react';
import {Segment,Button} from 'semantic-ui-react';
import { removeTaskAction } from '../../../action/Taskaction';
import {connect} from 'react-redux';


function Taskitem(props){
console.log(props);
const {taskItem} = props;

function handleRemove(){
    props.removeTask(taskItem.id);
}

return(

<Segment>
{taskItem.title}
<Button
negative
floated='right'
onClick={handleRemove}
>
X
</Button>

<div style={{clear:'both'}}>
</div>
</Segment>

);
}

function maxDispatchToProps(dispatch){
return{
    removeTask: (id) => {
        dispatch(removeTaskAction(id))
    }
}
}
//export default Taskitem;
export default connect(null,maxDispatchToProps)(Taskitem);