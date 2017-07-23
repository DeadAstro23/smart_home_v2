import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/app.jsx';
import Checkout from './components/Checkout.jsx'
import * as reducers from './reducers';

import '../style/less/style.less';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const reducer = combineReducers(reducers);

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Provider store={createStoreWithMiddleware(reducer)}>
          <Router>
              <div>
                <Route exact path="/" component={App}/>
                <Route path="/checkout" component={Checkout}/>
              </div>
          </Router>
      </Provider>
    </MuiThemeProvider>
  , document.querySelector('.container'));
