import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import header from '../constants/index.js';
import { Link } from 'react-router-dom';
import '../index.css';

class HomePage extends Component {

	state = {

		names: [],
		ids: [],
		amounts: [],
		transInfo: [], 
		transactions: [],
		tranID: [],
		allStat: []
	}


	componentDidMount = () => {

		var request1 = fetch('https://uat-api.synapsefi.com/v3.1/users?page=1&per_page=10', {
			method: 'GET',
			headers: header
		})
		.then(res => res.json())

		var request2 = fetch('https://uat-api.synapsefi.com/v3.1/trans?page=1&per_page=10', {
			method: 'GET',
			headers: header
		})
		.then(res => res.json())
		
		Promise.all([request1, request2]).then(values => {
			let names , ids , amounts, transInfo , allStat
			
			names = values[0].users.map((n) => {
				return n.legal_names[0]
			})

			ids = values[0].users.map((n) => {
				return n._id
			})

			amounts = values[1].trans.map(t => {
				return t.amount
			})

			transInfo = values[1].trans.map(f => {
				return f.from 
			})

			allStat = values[1].trans.map(s => {
				return s.recent_status
			})

			this.setState({

				names: names,
				ids: ids,
				amounts: amounts,
				transInfo: transInfo,
				transactions: values[1].trans,
				tranID: values[1].trans[0]._id,
				allStat: allStat

			})
			
			// console.log(this.state.names)
			// console.log(this.state.ids)
			// console.log(this.state.amounts)
			// console.log(this.state.transInfo)
			// console.log(this.state.transactions)
			// console.log(this.state.tranID)
			// console.log(this.state.tranStat)
			// console.log(this.state.allStat)
			
		})
	}

	handleClick = e => {
		let ID = this.state.tranID 
		if(window.confirm('Are you sure?')){
			e.preventDefault();
			fetch(`https://uat-api.synapsefi.com/v3.1/users/5c10ae89bb650f0068118902/nodes/5c174173d031360068580fdb/trans/${ID}`, {
				method: 'DELETE',
				headers: header
		})
		.then(res => console.log("done",res))

		}
	}

	render() {
		let peopleNames = this.state.names
		let peopleID = this.state.ids
		let transactions = this.state.amounts
		let allStatus = this.state.allStat
		
		let first , second , third , fourth, fifth
		let id1, id2, id3, id4, id5
		let eachTransaction , trans1, trans2, trans3, trans4, trans5
		let eachStatus, stat1, stat2, stat3, stat4, stat5

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

		if(transactions){
			eachTransaction = transactions.map(t => {
				return t.amount
			})

			trans1 = eachTransaction[0]
			trans2 = eachTransaction[1]
			trans3 = eachTransaction[2]
			trans4 = eachTransaction[3]
			trans5 = eachTransaction[4]
		}

		if(allStatus){
			eachStatus = allStatus.map( s => {
				return s.status
			})
			console.log(eachStatus)
			stat1 = eachStatus[0]
			stat2 = eachStatus[1]
			stat3 = eachStatus[2]
			stat4 = eachStatus[3]
			stat5 = eachStatus[4]
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
						</table><br/><br/><br/>
					<Link to="/register"><button className="waves-light btn-small">Create New User</button></Link><br/><br/><br/><br/>
					<h4><u>All Transactions</u></h4>
					<table className="t">
							<thead>
							    <tr>
							      <th scope="col">#</th>
							      <th scope="col">Amount</th>
							      <th scope="col">Status</th>
							    </tr>
							</thead>
							<tbody>
							    <tr>
							      <th scope="row">1</th>
							      <td>{trans1}</td>
							      <td style={{color: 'red'}}>{stat1}</td>
							      <td><Link to='/trans1'><button className="waves-light btn-small">View</button></Link></td>
							      <td><button className="waves-light btn-small" onClick={this.handleClick}>DELETE</button></td>
							    </tr>
							    <tr>
							      <th scope="row">2</th>
							      <td>{trans2}</td> 
							       <td>{stat2}</td>
							      <td><button className="waves-light btn-small">View</button></td>
							      <td><button className="waves-light btn-small">DELETE</button></td>
							    </tr>
							    <tr>
							      <th scope="row">3</th>
							      <td>{trans3}</td>
							      <td>{stat3}</td>
							      <td><button className="waves-light btn-small">View</button></td>
							      <td><button className="waves-light btn-small">DELETE</button></td>
							    </tr>
							    <tr>
							      <th scope="row">4</th>
							      <td>{trans4}</td>
							      <td>{stat4}</td>
							      <td><button className="waves-light btn-small">View</button></td>
							      <td><button className="waves-light btn-small">DELETE</button></td>
							    </tr>
							    <tr>
							      <th scope="row">5</th>
							      <td>{trans5}</td>
							       <td>{stat5}</td>
							      <td><button className="waves-light btn-small">View</button></td>
							      <td><button className="waves-light btn-small">DELETE</button></td>
							    </tr>
							</tbody>
						</table> <br/><br/><br/>
						<Link to='/create'><button className="waves-light btn-small">Create Transaction</button></Link><br/><br/>
					</div>
				</section>
				<Footer />
			</div>
		);
	}
}

export default HomePage