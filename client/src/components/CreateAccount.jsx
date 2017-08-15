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
	margin: "0 auto"
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
			password: "",
			phoneNumber: "",
			age: "",
			gender: "",
			height: "",
			weight: "",
			address: {
				streetOne: "",
				streetTwo: "",
				city: "",
				state: "",
				zipCode: "",
			},
			devices: {
				deviceId: ""
			},
			emergencyContacts: {
				name: "",
				phoneNumber: "",
				relationship: "",
			}
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
	_handleChangePhoneNumber = (e) => {
		e.preventDefault();
		const phoneNumber = e.target.value;
		this.setState({phoneNumber});
	}
	_handleChangeAge = (e) => {
		e.preventDefault();
		const age = e.target.value;
		this.setState({age});
	}
	_handleChangeGender = (e) => {
		e.preventDefault();
		const gender = e.target.value;
		this.setState({gender});
	}
	_handleChangeHeight = (e) => {
		e.preventDefault();
		const height = e.target.value;
		this.setState({height});
	}
	_handleChangeWeight = (e) => {
		e.preventDefault();
		const weight = e.target.value;
		this.setState({weight});
	}
	_handleChangeStreetOne = (e) => {
		e.preventDefault();
		const streetOne = e.target.value;
		this.setState({streetOne});
	}
	_handleChangeStreetTwo = (e) => {
		e.preventDefault();
		const streetTwo = e.target.value;
		this.setState({streetTwo});
	}
	_handleChangeCity = (e) => {
		e.preventDefault();
		const city = e.target.value;
		this.setState({city});
	}
	_handleChangeState = (e) => {
		e.preventDefault();
		const state = e.target.value;
		this.setState({state});
	}
	_handleChangeZipCode = (e) => {
		e.preventDefault();
		const zipCode = e.target.value;
		this.setState({zipCode});
	}
	_handleChangeDeviceId = (e) => {
		e.preventDefault();
		const deviceId = e.target.value;
		this.setState({deviceId});
	}

	_handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		console.log(e);
		axios.post("/api/user", this.state).then((res) => {
			const newState = {...this.state};
			newState.firstName 		= res.data.firstName;
			newState.lastName 		= res.data.lastName;
			newState.username 		= res.data.username;
			newState.email 			= res.data.email;
			newState.password 		= res.data.password;
			newState.phoneNumber 	= res.data.phoneNumber;
			newState.age 			= res.data.age;
			newState.gender 		= res.data.gender;
			newState.height 		= res.data.height;
			newState.weight 		= res.data.weight;
			newState.streetOne 		= res.data.streetOne;
			newState.streetTwo 		= res.data.streetTwo;
			newState.city 			= res.data.city;
			newState.state 			= res.data.state;
			newState.zipCode 		= res.data.zipCode;
			newState.deviceId 		= res.data.deviceId;
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
					<div style={formStyle}>
						<input onChange={this._handleChangeFirstName} type="text" name="firstName" placeholder="First Name"/>
						<input onChange={this._handleChangeLastName} type="text" name="lastName" placeholder="Last Name"/>
					</div>
					<div style={formStyle}>
						<input onChange={this._handleChangeUsername} type="text" name="username" placeholder="Username"/>
						<input onChange={this._handleChangeEmail} type="text" name="email" placeholder="Email"/>
					</div>
					<div style={formStyle}>
						<input onChange={this._handleChangePassword} type="text" name="password" placeholder="Password"/>
						<input onChange={this._handleChangePhoneNumber} type="text" name="phoneNumber" placeholder="Phone Number"/>
					</div>
					<div style={formStyle}>
						<input onChange={this._handleChangeAge} type="text" name="age" placeholder="Age"/>
						<input onChange={this._handleChangeGender} type="text" name="gender" placeholder="Gender"/>
					</div>
					<div style={formStyle}>
						<input onChange={this._handleChangeHeight} type="text" name="height" placeholder="Height"/>
						<input onChange={this._handleChangeWeight} type="text" name="weight" placeholder="Weight"/>
					</div>
					<div style={formStyle}>
						<input onChange={this._handleChangeStreetOne} type="text" name="address.streetOne" placeholder="Street 1"/>
						<input onChange={this._handleChangeStreetTwo} type="text" name="address.streetTwo" placeholder="Street 2"/>
					</div>
					<div style={formStyle}>
						<input onChange={this._handleChangeCity} type="text" name="address.city" placeholder="City"/>
						<input onChange={this._handleChangeState} type="text" name="address.state" placeholder="State"/>
					</div>
					<div style={formStyle}>
						<input onChange={this._handleChangeZipCode} type="text" name="address.zipCode" placeholder="Zip Code"/>
						<input onChange={this._handleChangeDeviceId} type="text" name="devices.deviceId" placeholder="Device ID"/>
					</div>
						<input onClick={this._handleSubmit} style={submitStyle} type="submit"/>
				</form>
			</div>
		);
	}
}

export default CreateAccount;