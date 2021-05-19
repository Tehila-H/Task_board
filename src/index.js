import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {compose, createStore, combineReducers, applyMiddleware} from 'redux';
import {userReducer, tasksReducer} from './store/reducers';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';
import Dialog from './components/Dialog';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(combineReducers({
  user:userReducer,
  task:tasksReducer
}),composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
  <React.StrictMode>
    <Router>
 
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
