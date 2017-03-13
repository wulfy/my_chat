import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider }                     from 'react-redux';
import routes      from './routes.js';
import configureStore from './store/configureStore';
import { Router,match,browserHistory}  from 'react-router';
import './index.css';

const store   = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
