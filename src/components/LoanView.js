import React, { Component } from 'react';
import header from '../constants/index.js';
import '../index.css';

class LoanView extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: [],
			documents: []
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
		fetch('https://uat-api.synapsefi.com/v3.1/users/5c10ae89bb650f0068118902', {
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
	render(){
		let data = this.state.data.legal_names
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
		if(data) {
			name = Object.keys(data).map(keys => {
				return <h1 className="heading">Hello, {data[keys]} !</h1>
			})
		} else {
			name = null
		}
		return(
			<div>
			{name}
			{information}
			{doc}
			{doc_stat}
			{social}
			<button onClick={this.handleClick} class="waves-light btn-small">Add</button>

			</div>

		)
	}
}

export default LoanView