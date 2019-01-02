import React, { Component } from 'react';
import header from '../constants/index.js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../index.css';


class AddForm extends Component {
	constructor(props){
		super(props)
		this.state = {
			name: 'John Doe',
			street: '39878 Parada St',
			city: 'Newark',
			st: 'CA',
			zip: '94560',
			country: 'US',
			email: 'mmenon.0419@gmail.com',
			phone: '5109363244',
			type: 'M',
			scope: 'Arts & Entertainment',
			visibility: 'visible',
			vis: 'hidden'
		}
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
			[e.target.street]: e.target.value,
			[e.target.city]: e.target.value,
			[e.target.st]: e.target.value,
			[e.target.zip]: e.target.value,
			[e.target.country]: e.target.value,
			[e.target.email]: e.target.value,
			[e.target.phone]: e.target.value,
			[e.target.type]: e.target.value,
			[e.target.scope]: e.target.value
		})
	}

	handleClick = e => {
		e.preventDefault();
		fetch('https://uat-api.synapsefi.com/v3.1/users/5c10ae89bb650f0068118902', {
			method: 'PATCH',
			headers: header,
			body: JSON.stringify({
					documents: [{
			      	email:this.state.email,
			        phone_number:this.state.phone,
			        ip:"::1",
			        name:this.state.name,
			        alias:"John",
			        entity_type:this.state.type,
			        entity_scope:this.state.scope,
			        day:31,
			        month:12,
			        year:2018,
			        address_street:this.state.street,
			        address_city:this.state.city,
			        address_subdivision:this.state.st,
			        address_postal_code:this.state.zip,
			        address_country_code:this.state.country,
			        virtual_docs:[{
			            document_value:"444",
			            document_type:"SSN"
			        }]
   				 }]
			})
		})
		.then(res => console.log("done",res))
		.then(res => {
			this.setState({
			name: '',
			street: '',
			city: '',
			st: '',
			zip: '',
			country: '',
			email: '',
			phone: '',
			type: '',
			scope: '',
			visibility: 'hidden',
			vis: 'visible'
			})
		})
	}
	render() {
		return (
			<div>
			<Navbar />
			<section className="container">
			<div className="form">
			<div style={{visibility: this.state.vis}}>
				<h3>
					<b>Done!</b><br/><br/>
						<Link to='/profile'><button className="waves-light btn-small">Go To Profile</button></Link>
				</h3>
			</div>
			<div style={{visibility: this.state.visibility}}>
				<h3 className="heading">
						<b>Let's start with some basics.</b>
					</h3>
					  <div className="row">
					    <form className="col s12">
					      <div className="row">
					        <div className="input-field col s12">
					        <h6>Full Name</h6>
					          <input id="name" type="text" name="name" onChange={this.handleChange}/>
					          <h6>Address</h6>
					          	<div className="input-field col s12">
					          		<div className="input-field col s12">
					          	   <input placeholder="street address" type="text" name="street" onChange={this.handleChange}/>
						           <input placeholder="city" type="text" name="city" onChange={this.handleChange}/>
						           <input placeholder="state" type="text" name="st" onChange={this.handleChange} />
						           <input placeholder="zip" type="text" name="zip" onChange={this.handleChange}/>
						           <input placeholder="country" type="text" name="country" onChange={this.handleChange}/>
						           </div>
						        </div>
						        <h6>Email</h6>
						        <input type="email" name="email" onChange={this.handleChange} />
						        <h6>Phone</h6>
					          	<input id="phone" name="phone" onChange={this.handleChange}/>
					          	<h6>Entity Type</h6>
					          	<input placeholder="Example: PARTNERSHIP" name="type" onChange={this.handleChange}/>
					          	<h6>Entity Scope</h6>
					          	<input placeholder="Example: pet services" name="scope" onChange={this.handleChange}/>
					        </div>
					      </div>
					      <button id="btn" className="waves-light btn-small" onClick={this.handleClick}>Submit</button><br/><br/>
					      	<Link to="/profile"><button id="btn" className="waves-light btn-small">Back</button></Link>
					    </form>
					  </div>
					</div>
				</div>
			</section>
			<Footer />
			</div>
		);
	}
}


export default AddForm;