import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './appts/Dashboard';
import store from '../store'; 
import { Provider } from 'react-redux';
import Header from './layouts/Header';
import { Router, Route, Switch } from 'react-router-dom'; // added
import history from '../history'; // added
import ApptDelete from './appts/ApptDelete'; // added



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/delete/:id' component={ApptDelete} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));