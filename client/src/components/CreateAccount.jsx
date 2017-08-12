import React, { Component } from 'react';

class CreateAccount extends Component {
    render() {
        return (
            <div>
                <h1>Create Account</h1>
                <form action="">
                    <div>
                        <label htmlFor="firstName"></label>
                        <input type="text" placeholder="First Name"/>
                        <label htmlFor="lastName"></label>
                        <input type="text" placeholder="Last Name"/>
                    </div>
                    <div>
                        <label htmlFor="userame"></label>
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div>
                        <label htmlFor="email"></label>
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input type="text" placeholder="Password"/>
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default CreateAccount;