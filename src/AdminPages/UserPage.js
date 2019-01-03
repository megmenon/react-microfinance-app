import React, { Component } from 'react';
import userheader from '../constants/userindex.js';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

class UserPage extends Component {
	state = {
		data: [],
		person: [],
		phone: [],
		scope: [],
		type: [],
		social: [],
		virtual_doc: [],
		virtual_status: []
	}

	componentDidMount = () => {
			fetch('https://uat-api.synapsefi.com/v3.1/users/5c2c80bb8779710065f6eebb', {
			method: 'GET',
			headers: userheader
		})
		.then(res => res.json())
		.then(data => {
			var btype 
			for(var i = 1; i < data.documents.length + 1; i++){
				btype = data.documents[i - 1]
			}
			this.setState({
				data: data,
				person: data.legal_names[0],
				phone: data.phone_numbers[0],
				scope: btype.entity_scope,
				type: btype.entity_type,
				social: btype.social_docs,
				virtual_doc: btype.virtual_docs[0].document_type,
				virtual_status: btype.virtual_docs[0].status
			})
			console.log(data)
			console.log(this.state.person)
			console.log(this.state.virtual_doc)
		})
	}
	render() {
		let personName = this.state.person
		let phoneNumber = this.state.phone
		let scope = this.state.scope
		let type = this.state.type
		let virtual_doc = this.state.virtual_doc
		let virtual_status = this.state.virtual_status
		let social = this.state.social

		let name , phone , docScope, docType, virDoc, virStat, socDocs

		if(personName && phoneNumber && scope && type && virtual_doc && virtual_status && social){
			name = personName
			phone = phoneNumber
			docScope = scope
			docType = type
			virDoc = virtual_doc
			virStat = virtual_status
			socDocs = social.map(keys => {
				return <div><h6>{keys.document_type} : {keys.status}</h6>
				</div>
			})
		}

		return (
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
				          	<td className="td">Name: {name} <br/>Phone: {phone}</td>
				            <td className="td">Scope: {docScope} <br/> Type: {docType} </td>
				            <td className="td">Type: {virDoc}<br/> Status: {virStat}</td>
				            <td className="td">{socDocs}</td>
				          </tr>
				        </tbody>
	     		 	</table><br/><br/><br/>
	     		 	<Link to='/admin'><button className="waves-light btn-small">Back</button></Link>
	     		 </div>
	     	</section>
	     	<Footer />
		</div>
		);
	}
}

export default UserPage