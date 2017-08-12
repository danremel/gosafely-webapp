import React, { Component } from 'react';

class UserInformation extends Component {
    render() {
        return (
            <div>
                <h3>Enter your infomation:</h3>
                <form>
                <h5>Address:</h5>
                    <div>
                        <label htmlFor="streetOne"></label>
                        <input type="text" placeholder="Street 1"/>
                        <label htmlFor="streetTwo"></label>
                        <input type="text" placeholder="Street 2"/>
                    </div>
                    <div>
                        <label htmlFor="city"></label>
                        <input type="text" placeholder="City"/>
                        <label htmlFor="state"></label>
                        <input type="text" placeholder="State"/>
                        <label htmlFor="zipCode"></label>
                        <input type="text" placeholder="Zip Code"/>
                    </div>
                <h5>Enter Birthday:</h5>
                    <div>
                        <label htmlFor="age"></label>
                        <input type="text" placeholder="MM/DD/YYYY"/>
                        <label htmlFor="gender"></label>
                        <input type="text" placeholder="Gender"/>
                        <label htmlFor="height"></label>
                        <input type="text" placeholder="Height"/>
                        <label htmlFor="weight"></label>
                        <input type="text" placeholder="Weight"/>
                    </div>
                    <br/>
                    <div>
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserInformation;