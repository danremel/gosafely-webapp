import React, { Component } from 'react';

class DeviceRegistration extends Component {
    render() {
        return (
            <div>
                <h3>Enter your Device ID:</h3>
                <form>
                    <label htmlFor="deviceId"></label>
                    <input type="text" placeholder="Device ID"/>
                </form>
                <br/>
                    <input type="submit"/>
            </div>
        );
    }
}

export default DeviceRegistration;