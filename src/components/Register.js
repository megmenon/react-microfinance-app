import React, { Component } from 'react';
import header from '../constants/index.js';
import axios from 'axios';
import '../index.css';

class Register extends Component {
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
		fetch('https://uat-api.synapsefi.com/v3.1/users/5c14d993bb650f0066cba2bf', {
			method: 'PATCH',
			headers: header,
			body: JSON.stringify({
					documents: [{
			      	email:"hello@gmail.com",
			        phone_number:"901.111.1111",
			        ip:"::1",
			        name:"Rose Water",
			        alias:"Test",
			        entity_type:"F",
			        entity_scope:"Arts & Entertainment",
			        day:2,
			        month:5,
			        year:1989,
			        address_street:"39878 Parada St",
			        address_city:"Newark",
			        address_subdivision:"CA",
			        address_postal_code:"94560",
			        address_country_code:"US",
			        virtual_docs:[{
			            document_value:"2222",
			            document_type:"SSN"
			        }]
			    }]
			})
		})
		.then(res => console.log("done",res));
	}
	render() {
		return (
			<div>
			<section className="container">
			<div className="form">
				<h3 className="heading">
					<b>Let's start with some basics.</b>
				</h3>
				  <div className="row">
				    <form className="col s12">
				      <div className="row">
				        <div className="input-field col s12">
				          <input placeholder="Full name" id="name" type="text" value={this.state.name} onChange={this.handleName}/>
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
				      <button id="btn" className="waves-effect deep-purple darken-2 btn-large" onClick={this.handleClick}>Register</button>
				    </form>
				  </div>
				  </div>
			</section>
			</div>
		);
	}
}


export default Register;