import React, { Component } from 'react';
import header from '../constants/index.js';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../index.css';

class LoanView extends Component {
	
		state = {
			data: [],
			person: [],
			scope: [],
			social: [],
			type: [],
			virtual_doc: [],
			virtual_status: [],
			visibility: 'hidden',
			button: 'visible',
			business_scope: 'Food/Grocery',
			business_type: 'LLC'
		}

	componentDidMount = () => {
			fetch('https://uat-api.synapsefi.com/v3.1/users/5c10ae89bb650f0068118902', {
			method: 'GET',
			headers: header
		})
		.then(res => res.json())
		.then(data => {
			var btype 
			for(var i = 1; i < data.documents.length + 1; i++){
				btype = data.documents[i - 1]
			}
			this.setState({
				data: data,
				person: data.documents[3].name,
				scope: btype.entity_scope,
				type: btype.entity_type,
				social: btype.social_docs,
				virtual_doc: btype.virtual_docs[0].document_type,
				virtual_status: btype.virtual_docs[0].status
			})
			console.log(data)
			console.log(this.state.type)
		})
	}

	handleClick = (e) => {
		e.preventDefault();
		this.setState({
			visibility: 'visible',
			button: 'hidden'
		})
	}

	handleScope = e => {
		this.setState({

			business_scope: e.target.value
		})
	}

	handleType = e => {
		this.setState({
			business_type: e.target.value
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
			        entity_type: this.state.business_type,
			        entity_scope: this.state.business_scope,
			        day:2,
			        month:5,
			        year:1989,
			        address_street: '39878 Parada St',
			        address_city: 'Newark',
			        address_subdivision: 'CA',
			        address_postal_code: '94560',
			        address_country_code: 'US',
			        virtual_docs:[{
			            document_value: '222',
			            document_type: 'SSN'
			        }]
        		}]
			})
		})
		.then(res => console.log("done",res))
		.then(res => {
			this.setState({
			visibility: 'hidden',
			button: 'visible',
			business_scope: '',
			business_type: ''
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
			<Link to="/profile"><button className="waves-light btn-small">Back</button></Link>
			<div class="row">
			    <form style={{visibility: this.state.visibility}} class="col s12" >
			      <div class="row">
			        <div class="input-field col s6">
			        	<h6>Scope</h6>
			        	 <input placeholder="Example: Food/Grocery" type="text" value={this.state.business_scope} onChange={this.handleScope}/>
			        	<h6>Type</h6>
			        	<input placeholder="Example: PARTNERSHIP"type="text" value={this.state.business_type} onChange={this.handleType}/>
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