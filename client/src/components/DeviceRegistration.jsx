import React, { Component } from 'react';

const pageStyle= {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10%"
}
class DeviceRegistration extends Component {
    render() {
        return (
            <div style={pageStyle}>
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