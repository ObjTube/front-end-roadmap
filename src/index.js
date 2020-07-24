import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import Index from './page/index';
import Guide from './page/guide';
import Header from './components/header'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <Header />
    <Router basename="/front-end-roadmap">
      <Route exact path="/" component={Index} />
      <Route path="/guide/:query" component={Guide} />
    </Router>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
