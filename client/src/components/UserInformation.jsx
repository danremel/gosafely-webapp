import React, { Component } from 'react';


const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10%"
}

const fieldStyle ={
    width: "10%"
}
class UserInformation extends Component {
    render() {
        return (
            <div style={pageStyle}>
                <h3>Enter your information:</h3>
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
                        <input style={fieldStyle} type="text" placeholder="City"/>
                        <label htmlFor="state"></label>
                        <input style={fieldStyle} type="text" placeholder="State"/>
                        <label htmlFor="zipCode"></label>
                        <input style={fieldStyle} type="text" placeholder="Zip Code"/>
                    </div>
                <h5>Enter Birthday:</h5>
                    <div>
                        <label htmlFor="age"></label>
                        <input style={fieldStyle} type="text" placeholder="MM/DD/YYYY"/>
                        <label htmlFor="gender"></label>
                        <input style={fieldStyle} type="text" placeholder="Gender"/>
                        <label htmlFor="height"></label>
                        <input style={fieldStyle} type="text" placeholder="Height"/>
                        <label htmlFor="weight"></label>
                        <input style={fieldStyle} type="text" placeholder="Weight"/>
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