import React, { Component } from 'react';
import header from '../constants/index.js';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Facebook from 'react-facebook-login';
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
			color_two: '#000000',
			visibility: 'visible',
			confirmed: 'hidden'
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
				      password: this.state.password
				    }
				  ],
				  phone_numbers: [
				    this.state.phone
				  ],
				  legal_names: [
				    this.state.name
				  ],
				  extra: {
				    supp_id: "122eddfgbeafrfvbbb",
				    cip_tag:1,
				    is_business: false
				  }
			})
		})
		.then(res => console.log("done",res))
		.then(res => {
			this.setState({
				name: '',
				password: '',
				email: '',
				phone: '',
				visibility: 'hidden',
				confirmed: 'visible'
			})
		})
	}
	render() {
		return (
			<div>
			<Navbar />
			<section className="container">
			<div className="form">
				<h3 style={{visibility: this.state.visibility}} className="heading">
					<b>Let's start with some basics.</b>
				</h3>
				<h3 style={{visibility: this.state.confirmed}} className="heading">
					<b>Done!</b>
					<Link to='/profile'><button className="waves-light btn-small">Go To Profile</button></Link>
				</h3>
				  <div style={{visibility: this.state.visibility}} className="row">
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
				          <button style={{color: this.state.color_two}} onClick={this.handleNo}>No</button> <br/> <br/> <br/>
				        </div>
				      </div>
				  		<button onClick={this.handleClick}className="waves-light btn-small">Register</button>
				  		<br/><br/><br/>
						<Link to="/admin"><button className="waves-light btn-small">Back</button></Link> 
				    </form>
				  </div>
				  </div>
			</section>
			<Footer />
			</div>
		);
	}
}


export default Register;