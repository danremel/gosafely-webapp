import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LogIn from './components/LogIn';
import CreateAccount from './components/CreateAccount';
import UserInformation from './components/UserInformation';
import DeviceRegistration from './components/DeviceRegistration';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={LogIn}/>
            <Route path="/create-account" component={CreateAccount}/>
            <Route path="/user-information" component={UserInformation}/>
            <Route path="/device-registration" component={DeviceRegistration}/>
            <Route path="/dashboard" component={Dashboard}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
