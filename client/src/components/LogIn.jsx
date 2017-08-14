import React, { Component } from 'react';
import {Link} from 'react-router-dom';



const PageStyle = {
	display: "flex",
	flexDirection: "column",
    alignItems: "center",
    marginTop: "10%"
}

const submitStyle = {
    marginLeft: "32%",
}
const submitTextStyle = {
    textDecoration: "none"
}
const LinkStyle = {
    color: "#f0f1ee"
}


class LogIn extends Component {
    render() {
        return (
            <div style={PageStyle}>
                <h1>Log In:</h1>
                <form>
                    <div>
                        <label htmlFor="username"></label>
                        <input type="text" name="username" placeholder="Username"/>
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input type="text" name="password" placeholder="Password"/>
                    </div>
                    <div>
                        <button style={submitStyle}><Link style={submitTextStyle} to="/dashboard">Submit</Link></button>
                    </div>
                </form>
                <p>Don't have an account? <Link style={LinkStyle} to="/create-account">Sign Up Here</Link></p>
            </div>
        );
    }
}

export default LogIn;