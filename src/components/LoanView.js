import React, { Component } from 'react';
import header from '../constants/index.js';
import '../index.css';

class LoanView extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: {}
		}
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

	componentDidMount = () => {
		fetch('https://uat-api.synapsefi.com/v3.1/users/5c10ae89bb650f0068118902', {
			method: 'GET',
			headers: header
		})
		.then(res => res.json())
		.then(data => {
			this.setState({
				data: data
			})
			console.log(data.documents[0].social_docs)
		})
	}

	render() {
		let data = this.state.data.legal_names
		let name;
		if(data) {
			name = Object.keys(data).map(keys => {
				return <h3 className="heading">Hello, {data[keys]} !</h3>
			})
		} else {
			name = null
		}
		let info = this.state.data.documents
		let infor;
		if(info) {
			infor = info.map(keys => {
				return <h3 className="heading">{keys.id}</h3>
			})
		}
		return (
			<div>
				<section className="container">
				<div className="form">
				{name} 
				{infor}
				</div>
				<button id="btn" className="waves-effect deep-purple darken-2 btn-large" onClick={this.handleClick}>Add Documents</button>
				</section>
			</div>
		);
	}
}

export default LoanView