import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class LogIn extends Component {
    render() {
        return (
            <div>
                <h1>Log In</h1>
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
                        <input type="submit"/>
                    </div>
                </form>
                <p>Don't have an account? <Link to="/create-account">Sign Up Here</Link></p>
            </div>
        );
    }
}

export default LogIn;