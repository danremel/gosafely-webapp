import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
	constructor(){
		super();
		this.state = {
					firstName: "",
					lastName: "",
					username: "",
					email: "",
					password: ""
		}
	}


	_handleChangeFirstName = (e) => {
		e.preventDefault();
		const firstName = e.target.value;
		this.setState({firstName});
	};
	_handleChangeLastName = (e) => {
		e.preventDefault();
		const lastName = e.target.value;
		this.setState({lastName});
	}
	_handleChangeUsername = (e) => {
		e.preventDefault();
		const username = e.target.value;
		this.setState({username});
	}
	_handleChangeEmail = (e) => {
		e.preventDefault();
		const email = e.target.value;
		this.setState({email});
	}
	_handleChangePassword = (e) => {
		e.preventDefault();
		const password = e.target.value;
		this.setState({password});
	}

	_handleSubmit = (e) => {
		e.preventDefault();
		axios.post("/api/user", this.state).then((res) => {
			const newState = {...this.state};
			this.setState(newState);
			console.log(this.state);
		})
		.catch(err => console.log(err));
	};
	
	render() {
		return (
			<div style={PageStyle}>
				<h1>Create Account</h1>
				<form>
					<div>
						<input onChange={this._handleChangeFirstName} type="text" name="firstName" placeholder="First Name"/>
						<input onChange={this._handleChangeLastName} type="text" name="lastName" placeholder="Last Name"/>
					</div>
					<div style={formStyle}>
						<input onChange={this._handleChangeUsername} type="text" name="username" placeholder="Username"/>
					</div>
					<div style={formStyle}>
						<input onChange={this._handleChangeEmail} type="text" name="email" placeholder="Email"/>
					</div>
					<div style={formStyle}>
						<input onChange={this._handleChangePassword} type="text" name="password" placeholder="Password"/>
					</div>
					<input onClick={this._handleSubmit} style={submitStyle} type="submit"/>
				</form>
			</div>
		);
	}
}

export default CreateAccount;