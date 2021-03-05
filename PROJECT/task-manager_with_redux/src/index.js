import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Taskreducer} from './reducer/Taskreducer';
import thunk from 'redux-thunk';

 const store=createStore(Taskreducer,[
     //{ for middle ware sample we removed

//     id: 1,
//     title: 'Learn Redux again',
//     completed: false,
//     date: new Date()
//}
],applyMiddleware(thunk));
//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(

    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
