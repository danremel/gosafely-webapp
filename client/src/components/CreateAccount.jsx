import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const PageStyle = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	marginTop: "10%"
}
const formStyle = {
	marginLeft: "50px"
}
const submitStyle = {
	marginLeft: "35%"
}
class CreateAccount extends Component {
	render() {
		return (
			<div style={PageStyle}>
				<h1>Create Account</h1>
				<form action="">
					<div>
						<label htmlFor="firstName"></label>
						<input type="text" placeholder="First Name"/>
						<label htmlFor="lastName"></label>
						<input type="text" placeholder="Last Name"/>
					</div>
					<div style={formStyle}>
						<label htmlFor="username"></label>
						<input type="text" placeholder="Username"/>
					</div>
					<div style={formStyle}>
						<label htmlFor="email"></label>
						<input type="text" placeholder="Email"/>
					</div>
					<div style={formStyle}>
						<label htmlFor="password"></label>
						<input type="text" placeholder="Password"/>
					</div>
					<input style={submitStyle} type="submit"/>
				</form>
			</div>
		);
	}
}

export default CreateAccount;