import React from 'react';
import ReactDOM from 'react-dom';
import Component from './index';
import { MemoryRouter as Router } from 'react-router-dom';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(

    <Router>
      <Component />
    </Router>

  , div);
  ReactDOM.unmountComponentAtNode(div);
});
