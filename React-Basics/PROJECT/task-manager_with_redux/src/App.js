import React, { Component } from 'react';
import TaskHeader from './components/shared/header/Header';
import Footer from './components/shared/footer/Footer';
import {Button,Container, Grid} from 'semantic-ui-react';
import Loginform from './components/loginform/Loginform';
import Taskmanager from './components/taskmanager/Taskmanager';
class App extends Component {
  render() {
    return (
      
      <Container>
      <Grid>
      <Grid.Row>
      <Grid.Column>
       <TaskHeader/>
       </Grid.Column>
       </Grid.Row>

       <Grid.Row>
       <Grid.Column computer={6} mobile={16} tablet={10}>
       <Loginform/>
       {/*<Taskmanager/>*/}
       </Grid.Column>
       </Grid.Row>

       <Grid.Row>
      <Grid.Column>
       <Footer/>
       </Grid.Column>
       </Grid.Row>

       </Grid>
       <Button positive> click me</Button>
       <Button negative> click me</Button>
       <Button primary> click me</Button>
       </Container>
     
    );
  }
}

export default App;
