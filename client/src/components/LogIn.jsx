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
const logoStyle = {
    width: "50%"
}


class LogIn extends Component {
    render() {
        return (
            <div style={PageStyle}>
                <img style={logoStyle} src="https://static1.squarespace.com/static/58cb12bf9f7456fdfb4cda44/t/59947c98d2b857c27b32b005/1502666605031/?format=1500w" alt=""/>
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
                        <Link style={submitTextStyle} to="/dashboard/:id"><button style={submitStyle}>Submit</button></Link>
                    </div>
                </form>
                <p>Don't have an account? <Link style={LinkStyle} to="/create-account">Sign Up Here</Link></p>
            </div>
        );
    }
}

export default LogIn;