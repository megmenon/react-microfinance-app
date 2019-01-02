import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import header from '../constants/index.js';
import { Link } from 'react-router-dom';
import '../index.css';

class HomePage extends Component {

	state = {
		transactions: [],
		names: [],
		ids: []
	}


	componentDidMount = () => {

		// var request1 = fetch('https://uat-api.synapsefi.com/v3.1/users', {
		// 	method: 'GET',
		// 	headers: header
		// })
		// .then(res => res.json())

		// var request2 = fetch('https://uat-api.synapsefi.com/v3.1/users/5c10ae89bb650f0068118902/trans', {
		// 	method: 'GET',
		// 	headers: header
		// })
		// .then(res => res.json())
		
		// Promise.all([request1, request2]).then(values => {
		// 	this.setState({
		// 		users: values[0],
		// 		transactions: values[1]
		// 	})
		// 	console.log(values)
			
		// })

			fetch('https://uat-api.synapsefi.com/v3.1/users?page=1&per_page=10', {
			method: 'GET',
			headers: header
		})
		.then(res => res.json())
		.then(data => {
			let names , ids
			
			names = data.users.map((n) => {
				return n.legal_names[0]
			})

			ids = data.users.map((n) => {
				return n._id
			})
			
			this.setState({
				names: names,
				ids: ids

			})
			console.log(data)
			console.log(this.state.names)
			console.log(this.state.ids)
		})
	}

	render() {
		let peopleNames = this.state.names
		let peopleID = this.state.ids
		
		let first , second , third , fourth, fifth
		let id1, id2, id3, id4, id5

		if(peopleNames){
			first = peopleNames[0]
			second = peopleNames[1]
			third = peopleNames[2]
			fourth = peopleNames[3]
			fifth = peopleNames[4]
		}
		if(peopleID) {
			id1 = peopleID[0]
			id2 = peopleID[1]
			id3 = peopleID[2]
			id4 = peopleID[3]
			id5 = peopleID[4]
		}

		return (
			<div>
				<Navbar />
				<section className="main">
					<div className="form">
						<h2>Welcome!</h2><br/><br/><br/>
						<h4><u>All Users</u></h4>
						<table className="t">
							<thead>
							    <tr>
							      <th scope="col">#</th>
							      <th scope="col">Name</th>
							      <th scope="col">ID</th>
							    </tr>
							</thead>
							<tbody>
							    <tr>
							      <th scope="row">1</th>
							      <td>{first}</td>
							      <td>{id1}</td>
							      <td><Link to='/user1'><button className="waves-light btn-small">View</button></Link></td>
							    </tr>
							    <tr>
							      <th scope="row">2</th>
							      <td>{second}</td>
							      <td>{id2}</td>
							      <td><button className="waves-light btn-small">View</button></td>
							    </tr>
							    <tr>
							      <th scope="row">3</th>
							      <td>{third}</td>
							      <td>{id3}</td>
							      <td><button className="waves-light btn-small">View</button></td>
							    </tr>
							    <tr>
							      <th scope="row">4</th>
							      <td>{fourth}</td>
							      <td>{id4}</td>
							      <td><button className="waves-light btn-small">View</button></td>
							    </tr>
							    <tr>
							      <th scope="row">5</th>
							      <td>{fifth}</td>
							      <td>{id5}</td>
							      <td><button className="waves-light btn-small">View</button></td>
							    </tr>
							</tbody>
						</table> 
					</div>
				</section>
				<Footer />
			</div>
		);
	}
}

export default HomePage