import React, { Component } from 'react';
import header from '../constants/index.js';
import '../index.css';


class AddForm extends Component {
	constructor(props){
		super(props)
		this.state = {
			name: '',
			password: '',
			email: '',
			phone: '',
			is_business: false,
			color_one: '#000000',
			color_two: '#000000'
		}
	}

	handleName = e => {
		let name = e.target.value;
		this.setState({
			name
		})
	}

	handlePassword = e => {
		let password = e.target.value;
		this.setState({
			password
		})
	}

	handleEmail = e => {
		let email = e.target.value;
		this.setState({
			email
		})
	}

	handlePhone = e => {
		let phone = e.target.value;
		this.setState({
			phone
		})
	}

	handleYes = (e) => {
		e.preventDefault();
		this.setState({
			is_business: true,
			color_one: '#43a047'
		})
	}

	handleNo = (e) => {
		e.preventDefault();
		this.setState({
			is_business: false,
			color_two: '#43a047'
		})
	}

	handleClick = e => {
		e.preventDefault();
		fetch('https://uat-api.synapsefi.com/v3.1/users', {
			method: 'POST',
			headers: header,
			body: JSON.stringify({
					logins: [
				    {
				      email: this.state.email,
				      password: this.state.password,
				      read_only: false
				    }
	  			],
				phone_numbers: [
				    this.state.phone
				],
	  			legal_names: [
	   				 this.state.name
	  			],
				extra: {
				    note: 'New user',
				    supp_id: '122efffgbeafrfcccc',
				    is_business: this.state.is_business
				}
			})
		})
		.then(res => console.log("done",res));
	}
	render() {
		return (
			<div>
			<div className="form">
				  <div className="row">
				    <form className="col s12">
				      <div className="row">
				        <div className="input-field col s12">
				          <input placeholder="Name" id="name" type="text" value={this.state.name} onChange={this.handleName}/>
				        </div>
				      </div>
				      <div className="row">
				        <div className="input-field col s12">
				          <input placeholder="Password" id="password" type="password" value={this.state.password} onChange={this.handlePassword}/>
				        </div>
				      </div>
				      <div className="row">
				        <div className="input-field col s12">
				          <input placeholder="Email" id="email" type="email" value={this.state.email} onChange={this.handleEmail}/>
				        </div>
				      </div>
				        <div className="row">
				        <div className="input-field col s12">
				          <input placeholder="Phone" id="phone" value={this.state.phone} onChange={this.handlePhone} />
				        </div>
				      </div>
				      <div className="row">
				        <div className="input-field col s12">
				          <h6> Is this a business account?</h6>
				          <button style={{color: this.state.color_one}} onClick={this.handleYes}>Yes</button> {''}{''}{''}
				          <button style={{color: this.state.color_two}} onClick={this.handleNo}>No</button>
				        </div>
				      </div>
				      <button id="btn" className="waves-effect deep-purple darken-2 btn-large" onClick={this.handleClick}>Submit</button>
				    </form>
				  </div>
				  </div>
			</div>
		);
	}
}


export default AddForm;