import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LogIn from './components/LogIn';
import CreateAccount from './components/CreateAccount';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import EmergencyContacts from './components/EmergencyContacts';
import MyDevices from './components/MyDevices';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={LogIn}/>
            <Route path="/create-account" component={CreateAccount}/>
            <Route path="/dashboard/:id" component={Dashboard}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/emergency-contacts" component={EmergencyContacts}/>
            <Route path="/my-devices" component={MyDevices}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
