import React,{Component} from 'react';
import {Form, Button} from 'semantic-ui-react';
class Loginform extends Component{
    

    constructor(props){
super(props);

this.state={
username: '',
usernameerror: false,
password:'',
passworderror: false


};

//this.username='';
//this.password='';
//this.usernameerror=false;
this.login=this.login.bind(this);
this.handleChange=this.handleChange.bind(this);
}//closing of constructor


login(){

    let valid=true;
if(this.state.username===''){
    valid=false;
   // this.state.usernameerror=true; here we are changing the state so better to use setState
   this.setState({
       usernameerror: true
       
   })

}
   if(this.state.password===''){
       valid=false;
       this.setState({
            passworderror: true
       });
   }
   if(valid){
       console.log(this.state.username,this.state.password);
   }
    // this.forceUpdate();
    console.log(this.state.username,this.password);




}

handleChange(event){
    console.log(event.target.name);
    const error = event.target.name+'error';
    this.setState({
        [event.target.name]: event.target.value,
        [error]: false
    });

    // if(event.target.name === 'username') {
    //     this.setState({
    //         username: event.target.value,
    //         usernameerror: false
    //     })
    // }

    // if(event.target.name === 'password') {
    //     this.setState({
    //         password: event.target.value,
    //         passworderror: false
    //     })
    // }
    

    //     const error=event.target.name + 'error';

// //this.state.username=event.target.value;
// //this.state.usernameerror=false;
// //if(event.target.name==='username'){}
// this.setState({
//    // username:event.target.value,
//     //usernameerror: false
//     [event.target.name]: event.target.value,
//     [error]: false
// })
//}
//this.forceUpdate();
}

render(){



return(
<Form>
<Form.Field error={this.state.usernameerror}>
<label htmlFor="username">UserName</label>
<input type="text" id="username" name="username" onChange={this.handleChange}/>
{
this.state.usernameerror && <span>username cant be blank</span>
}
</Form.Field>

<Form.Field error={this.state.passworderror}>
<label htmlFor="password">Password</label>
<input type="password" id="password" name="password" onChange={this.handleChange}/>
{
    this.state.passworderror && <span style={{color:'green'}}>password cant be blank</span>
}
</Form.Field>


<Button primary onClick={this.login}>Login</Button>
</Form>

);

}

}
export default Loginform;