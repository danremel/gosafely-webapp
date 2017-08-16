import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import FaCog from 'react-icons/lib/fa/cog';
import MdPeople from 'react-icons/lib/md/people';
import MdPermDeviceInformation from 'react-icons/lib/md/perm-device-information';

const buttonGroupStyle = {
    display: "flex",
    flexDirection: "column",
    width: "20%"
}
const buttonStyle = {
    margin: "10%",
    color: "white"
}


class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            id: "",
            username: "",
            firstName: ""
        }
    }
    componentWillMount(){
            const userId = this.props.match.params.id;
        axios.get(`/api/user/${userId}`).then((res) => {
            this.setState({
                id: res.data.id,
                username: res.data.username,
                firstName: res.data.firstName
            })
            console.log(res.data.username);
            console.log(res.data);
        })
    }

    render() {
        return (
            <div >    
                <div>
                    <h3>Hello, {this.state.firstName}</h3>
                    <h1>{this.state.username}</h1>
                </div>
                    <div style={buttonGroupStyle}>
                        <Link to="/settings"><FaCog style={buttonStyle}/></Link>Settings
                        <Link to="/emergency-contacts"><MdPeople style={buttonStyle}/></Link>Emergency Contacts
                        <Link to="/my-devices"><MdPermDeviceInformation style={buttonStyle}/></Link>My Devices
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