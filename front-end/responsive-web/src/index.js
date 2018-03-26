import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import registerServiceWorker from './registerServiceWorker';

import App from './components/pages/App';

import reducers from "./redux/reducers";
import sagas from "./redux/sagas";

import 'reset-css';
import './index.css';

const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer above and middleware
let store = createStore(
  ...reducers,
  compose(applyMiddleware(sagaMiddleware))
);

for (let i = 0; i < sagas.length; i++) {
  sagaMiddleware.run(sagas[i]);
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
, document.getElementById('root'));

registerServiceWorker();
