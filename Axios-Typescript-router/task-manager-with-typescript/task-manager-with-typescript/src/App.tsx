import React from 'react';
import './App.css';
import {Switch} from 'react-router';
import { Route} from 'react-router-dom';
import TaskManager from './components/task-manager/TaskManager';
import LoginForm from './components/login/LoginForm';

function App() {
  return (
    <Switch>
        <Route path='/login' exact component={LoginForm} />
        <Route path='/task-manager' exact component={TaskManager} />
    </Switch>
  );
}

export default App;
