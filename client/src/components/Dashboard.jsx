import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div>    
                <div>
                    <h3>Hello, Firstname</h3>
                </div>
                <div>
                    <button>Settings</button>
                    <button>Contacts</button>
                    <button>My Devices</button>
                </div>
                <div>
                    <button>Create Alert</button>
                    <button>Disable Alert</button>
                </div>
            </div>
        );
    }
}

export default Dashboard;