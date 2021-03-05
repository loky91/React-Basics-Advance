import React,{Component} from 'react';
import {Grid} from 'semantic-ui-react';
import Taskform from './taskform/Taskform';
import Tasklist from './tasklist/Tasklist';
class Taskmanager extends Component{
    // constructor(props){ for redux removed
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

        addTaskTM=(taskTitle)=>{
            let {tasks}=this.state;
            
            const newTask={
                id: tasks.length + 1,
                title: taskTitle,
                completed: false,
                date: new Date()
            }
            
            tasks.push(newTask);

            this.setState({
                tasks
            });

        }

   render(){
    return (

<Grid>

<Grid.Row>
<Grid.Column>
{/*<Taskform add={this.addTaskTM}/> for redux*/}
<Taskform/>
</Grid.Column>
</Grid.Row>

<Grid.Row>
<Grid.Column>
{/*<Tasklist tasks={this.state.tasks}/> for redux*/}
<Tasklist/>
</Grid.Column>
</Grid.Row>

</Grid>

    );
}
    }
    export default Taskmanager;
