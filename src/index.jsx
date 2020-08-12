import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Workspace from './pages/workspace';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <div>
        <Workspace />
      </div>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
