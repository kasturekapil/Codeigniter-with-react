import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './website.css';
import Websites from './components/websites';
import Create from './components/create';
import Update from './components/update';
// import registerServiceWorker from './registerServiceWorker';

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router> 
      <div>
          <Switch>
          <div>
			<Route exact path='/' component={Websites} />
			<Route path='/create' component={Create} />
			<Route path='/update/:id' component={Update} />
		   </div>
          </Switch>
      </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
