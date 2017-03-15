import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }                     from 'react-redux';
import routes      from './routes.js';
import configureStore from './store/configureStore';
import { Router}  from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';

const store   = configureStore();
const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
      <Router history={history} >
      	{routes}
      </Router >
  </Provider>,
  document.getElementById('root')
);
