import React, { Component } from 'react';
import header from '../constants/index.js';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../index.css';

class LoanView extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: [],
			person: [],
			scope: [],
			social: [],
			type: [],
			virtual_doc: [],
			virtual_status: [],
			visibility: 'hidden',
			button: 'visible',
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
				person: data.documents[0].name,
				scope: data.documents[0].entity_scope,
				type: data.documents[0].entity_type,
				social: data.documents[0].social_docs,
				virtual_doc: data.documents[1].virtual_docs[0].document_type,
				virtual_status: data.documents[1].virtual_docs[0].status
			})
			console.log(data)
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
			      	email: 'mmenon.0419@gmail.com',
			        phone_number: '5109363244',
			        ip:"::1",
			        name: 'John Doe',
			        alias:"Test",
			        entity_type:"LLC",
			        entity_scope:"Food/Grocery",
			        day:2,
			        month:5,
			        year:1989,
			        address_street: '39878 Parada St',
			        address_city: 'Newark',
			        address_subdivision: 'CA',
			        address_postal_code: '94560',
			        address_country_code: 'US',
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
			virtual_type: '',
			virtual_value: ''
			})
		})
	}
	render(){
		let person = this.state.person
		let info = this.state.data.phone_numbers
		let doc_status = this.state.data.doc_status
		let scope = this.state.scope
		let type = this.state.type
		let virtual = this.state.virtual_doc
		let details = this.state.social
		let virtual_status = this.state.virtual_status

		let name 
		if(person){
			name = person
		}

		let deets 
		if(details){
			deets = details.map(keys => {
				return <div><h6>{keys.document_type} : {keys.status}</h6>
				</div>
			})
		}

		let virtualDoc
		if(virtual){
			virtualDoc = virtual
		}

		let virtualStat
		if(virtual_status){
			virtualStat = virtual_status
		}

		let type1
		if(type){
			type1 = type
		}

		let scope1
		if(scope){
			scope1 = scope
		}


		let doc_stat;
		if(doc_status){
			doc_stat = Object.keys(doc_status).map(keys => {
				return <h6>{doc_status[keys]}</h6>
			})
		}
		let information
		if(info){
			information = info.map(key => {
				return <h6>Phone Number: {key}</h6>
			})
		}

		return(
		<div>
		<Navbar />
			<section className="main">
				<div className="form">
				<table>
			        <thead>
			         <tr>
			         	 <th>Personal Info</th>
			              <th>Entity</th>
			              <th>Virtual Documents</th>
			              <th>Social Documents</th>
			          </tr>
			        </thead>
			        <tbody className="td">
			          <tr className="td">
			          	<td className="td">Name: {name} <br/> {information}</td>
			            <td className="td">Scope: {scope1} <br/> Type: {type1}</td>
			            <td className="td">Type: {virtualDoc} <br/> Status: {virtualStat}</td>
			            <td className="td">{deets}</td>
			          </tr>
			        </tbody>
     		 </table> <br/><br/><br/>
			<button style={{visibility: this.state.button}} onClick={this.handleClick} class="waves-light btn-small">Update</button><br/><br/>
			<Link to="/profile"><button class="waves-light btn-small">Back</button></Link>
			<div class="row">
			    <form style={{visibility: this.state.visibility}} class="col s12" >
			      <div class="row">
			        <div class="input-field col s6">
				         <h6>Virtual Documents</h6>
				         <input placeholder="type"type="text" name="virtual_type" onChange={this.handleChange}/>
				          <input placeholder="value"type="text" name="virtual_value" onChange={this.handleChange}/>
			        </div>
			      </div>
			      <button onClick={this.handleForm} className="waves-light btn-small">Submit</button>
			    </form>
 		 	</div>
				</div>
			</section>
			<Footer />
     	</div>

		)
	}
}

export default LoanView