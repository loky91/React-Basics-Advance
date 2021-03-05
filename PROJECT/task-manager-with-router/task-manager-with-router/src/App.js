import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import TaskManager from './components/task-manager/TaskManager';
import LoginForm from './components/login/LoginForm';

function App() {
  return (
    <>
        <Route path='/' exact component={LoginForm} />
        <Route path='/task-manager' exact component={TaskManager} />
    </>
  );
}

export default App;
