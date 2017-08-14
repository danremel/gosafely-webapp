import React, { Component } from 'react';
import FaCog from 'react-icons/lib/fa/cog';
import MdPeople from 'react-icons/lib/md/people';
import MdPermDeviceInformation from 'react-icons/lib/md/perm-device-information';
// const PageStyle = {
// 	display: "flex",
// 	flexDirection: "column"
// }
const buttonGroupStyle = {
    display: "flex",
    flexDirection: "column",
    width: "20%"
}
const buttonStyle = {
    margin: "10%"
}

class Dashboard extends Component {
    render() {
        return (
            <div >    
                <div>
                    <h3>Hello, Firstname</h3>
                </div>
                <div style={buttonGroupStyle}>
                    <FaCog style={buttonStyle}/>Settings
                    <MdPeople style={buttonStyle}/>Emergency Contacts
                    <MdPermDeviceInformation style={buttonStyle}/>My Devices
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