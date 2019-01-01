import React, { Component } from 'react';
import header from '../constants/index.js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../index.css'


class ProfilePage extends Component {
	state = {
		person: '',
		scope1: [],
		tran1: [],
		scope2: []
	}
	componentDidMount = () => {

		var request1 = fetch('https://uat-api.synapsefi.com/v3.1/users/5c10ae89bb650f0068118902', {
			method: 'GET',
			headers: header
		})
		.then(res => res.json())

		var request2 = fetch('https://uat-api.synapsefi.com/v3.1/users/5c10ae89bb650f0068118902/trans', {
			method: 'GET',
			headers: header
		})
		.then(res => res.json())
		
		Promise.all([request1, request2]).then(values => {
			var btype 
			var btype2
			for(var i = 1; i < values[0].documents.length + 1; i++){
				btype = values[0].documents[i - 1]
			}
			this.setState({
				person: values[0].documents[2].name,
				scope1: btype.entity_scope,
				tran1: values[1].trans[0].amount,
				scope2: values[0].documents[1].entity_scope
			})
			console.log(values)
			
		})

		// 	fetch('https://uat-api.synapsefi.com/v3.1/users/5c10ae89bb650f0068118902', {
		// 	method: 'GET',
		// 	headers: header
		// })
		// .then(res => res.json())
		// .then(data => {
		// 	this.setState({
		// 		data: data
		// 	})
		// 	console.log(data)
		// })
	}
	render() {
		let person = this.state.person
		let scope_1 = this.state.scope1
		let tran_1 = this.state.tran1

		let scope_2 = this.state.scope2
		

		let name 
		if(person){
			name = person
		}

		let scope1
		if(scope_1) {
			scope1 = scope_1
		}

		let scope2
		if(scope_2){
			scope2 = scope_2
		}
		
		let amount1 
		if(tran_1){
			amount1 = Object.keys(tran_1).map(keys => {
				return <div>{tran_1[keys]}</div>
			})
		}

		return (
			<div>
			<Navbar />
			<section className="main">
				<div className="form">
				<h2>Welcome, {name}</h2><br/><br/>
				<h5><u>My Loans</u></h5><br/><br/>
				<table className="t">
					<thead>
					    <tr>
					      <th scope="col">#</th>
					      <th scope="col">Description</th>
					      <th scope="col">Type</th>
					      <th scope="col">Borrowed</th>
					      <th scope="col">Last Amount Paid</th>
					      <th scope="col">Next Due</th>
					    </tr>
					</thead>
					<tbody>
					    <tr>
					      <th scope="row">1</th>
					      <td>Renovation</td>
					      <td>{scope1}</td>
					      <td>$2000</td>
					      <td>{amount1}</td>
					      <td style={{color: 'red'}}>Jan 1st 2019</td>
					      <td><Link to='/view'><button className="waves-light btn-small">View</button></Link><br/><br/>
					      <Link to='/confirm'><button className="waves-light btn-small">Pay</button></Link>
					      </td>
					    </tr>
					    <tr>
					      <th scope="row">2</th>
					      <td>Food Truck Repair</td>
					      <td>{scope2}</td>
					      <td>$5000</td>
					      <td>80 <br/> USD </td>
					      <td style={{color: 'red'}}>Feb 1st 2019</td>
					      <td><button className="waves-light btn-small">View</button><br/><br/>
					      <button className="waves-light btn-small">Pay</button>
					      </td>
					    </tr>
					</tbody>
				</table> <br/><br/><br/>
					<Link to="/new"><button className="waves-light btn-small">Start New Loan Application</button></Link>
				</div>
			</section>
			<Footer />
			</div>
		);
	}
}


export default ProfilePage;