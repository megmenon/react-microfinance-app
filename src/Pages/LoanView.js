import React, { Component } from 'react';
import header from '../constants/index.js';
import '../index.css';

class LoanView extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: [],
			documents: [],
			visibility: 'hidden',
			button: 'visible',
			name: 'Cute Cat',
			street: '39878 Parada St',
			city: 'Newark',
			st: 'CA',
			zip: '94560',
			country: 'US',
			email: 'cutecat@gmail.com',
			phone: '5108762345',
			virtual_type: 'SSN',
			virtual_value: '222'
		}
	}

	componentDidMount = () => {
			fetch('https://uat-api.synapsefi.com/v3.1/users/5c10ae89bb650f0068118902', {
			method: 'GET',
			headers: header
		})
		.then(res => res.json())
		.then(data => {
			this.setState({
				data: data,
				documents: data.documents[0].social_docs[0]
			})
			console.log(data)
			console.log(this.state.documents)
		})
	}

	handleClick = (e) => {
		e.preventDefault();
		this.setState({
			visibility: 'visible',
			button: 'hidden'
		})
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
			[e.target.virtual_type]: e.target.value,
			[e.target.virtual_value]: e.target.value,
		})
	}

	handleForm = (e) => {
		e.preventDefault();
		fetch('https://uat-api.synapsefi.com/v3.1/users/5c10ae89bb650f0068118902', {
			method: 'PATCH',
			headers: header,
			body: JSON.stringify({
					documents: [{
			      	email: this.state.email,
			        phone_number: this.state.phone,
			        ip:"::1",
			        name: this.state.name,
			        alias:"Test",
			        entity_type:"M",
			        entity_scope:"Arts & Entertainment",
			        day:2,
			        month:5,
			        year:1989,
			        address_street: this.state.street,
			        address_city: this.state.city,
			        address_subdivision: this.state.st,
			        address_postal_code: this.state.zip,
			        address_country_code: this.state.country,
			        virtual_docs:[{
			            document_value: this.state.virtual_value,
			            document_type: this.state.virtual_type
			        }]
        		}]
			})
		})
		.then(res => console.log("done",res))
		.then(res => {
			this.setState({
			visibility: 'hidden',
			button: 'visible',
			name: '',
			street: '',
			city: '',
			st: '',
			zip: '',
			country: '',
			email: '',
			phone: '',
			virtual_type: '',
			virtual_value: ''
			})
		})
	}
	render(){
		let person_name = this.state.data.legal_names
		let info = this.state.data.phone_numbers
		let doc_status = this.state.data.doc_status
		let docs = this.state.data.documents
		let social_docs = this.state.documents


		let social;
		if(social_docs){
			social = Object.keys(social_docs).map(keys => {
				return <h6>{keys} : {social_docs[keys]}</h6>
			})
		}
		let doc
		if(docs){
			doc = docs.map(keys => {
				return<div><h6>Entity Scope : {keys.entity_scope} </h6>
				<h6> Entity Type: {keys.entity_type} </h6></div>
			})
		}
		let doc_stat;
		if(doc_status){
			doc_stat = Object.keys(doc_status).map(keys => {
				return <h6>{keys} : {doc_status[keys]}</h6>
			})
		}
		let information
		if(info){
			information = info.map(key => {
				return <h6>Phone Number: {key}</h6>
			})
		}

		let name;
		if(person_name) {
			name = Object.keys(person_name).map(keys => {
				return <h1 className="heading">Hello, {person_name[keys]} !</h1>
			})
		} else {
			name = null
		}
		return(
		<div>
			<section className="main">
				<div className="form">
					{name}
			{information}
			{doc}
			{doc_stat}
			{social}
			<button style={{visibility: this.state.button}} onClick={this.handleClick} class="waves-light btn-small">Add</button>
			<div class="row">
			    <form style={{visibility: this.state.visibility}} class="col s12" >
			      <div class="row">
			        <div class="input-field col s6">
			        	<h6>Name</h6>
				         	<input placeholder="Full Name"type="text" name="name" onChange={this.handleChange}/>
					        <h6>Address</h6>
					          <input placeholder="street address" type="text" name="street" onChange={this.handleChange}/>
					           <input placeholder="city" type="text" name="city" onChange={this.handleChange}/>
					           <input placeholder="state" type="text" name="st" onChange={this.handleChange} />
					           <input placeholder="zip" type="text" name="zip" onChange={this.handleChange}/>
					           <input placeholder="country" type="text" name="country" onChange={this.handleChange}/>
			        </div>
			        <div class="input-field col s6">
				         <h6>Virtual Documents</h6>
				         <input placeholder="type"type="text" name="virtual_type" onChange={this.handleChange}/>
				          <input placeholder="value"type="text" name="virtual_value" onChange={this.handleChange}/>
			        </div>
			      </div>
			      <div class="row">
				        <div class="input-field col s6">
				        	<h6>Phone</h6>
				          	<input placeholder="example: 5104441234" id="phone" name="phone" onChange={this.handleChange}/>
				        </div>
			      </div>
			      <div class="row">
				        <div class="input-field col s6">
				        <h6>Email</h6>
				          <input id="email" type="email" name="email" onChange={this.handleChange} />
				        </div>
			      </div>
			      <button onClick={this.handleForm} class="waves-light btn-small">Submit</button>
			    </form>
 		 </div>
				</div>
			</section>
			
     	</div>

		)
	}
}

export default LoanView