import React,{Component} from 'react';
import {Segment} from 'semantic-ui-react';
import Taskitem from '../taskitem/Taskitem';
import { connect } from 'react-redux';
import {getTasks} from '../../../action/Taskaction';

class Tasklist extends Component{
//for middle ware
    constructor(props){
        super(props);
        this.props.getT();
    }

// const listofitem={1,2,3,4,5}.map(function(){
//     return <Taskitem/>
// });
// constructor(props){
//     super(props);
//     this.state={
//         tasks:[
//     {
//        id:1,
//        title: 'learn React',
//        completed: false,
//        date: new Date() 
//     },{
//         id:2,
//         title: 'learn Redux',
//         completed: false,
//         date: new Date()  
//     }
    
//         ]
//     };
//     }

render(){
    const {tasks}=this.props;
return(

    <Segment.Group>

  {/* <Taskitem/>
   <Taskitem/>
   <Taskitem/>
   <Taskitem/>
  */}


   {tasks.map((task)=><Taskitem taskItem={task} key={task.id}/>)}

    </Segment.Group>
);
}
}

function mapStateToProps(state){
  return{
    tasks: state
  }  
}

//for middle ware
function mapDispatchToProps(dispatch){
return{
    getT:()=>{dispatch(getTasks)}
}
}
//for middle ware
export default connect(mapStateToProps,mapDispatchToProps)(Tasklist);
//export default connect(mapStateToProps,null)(Tasklist);
//export default Tasklist;