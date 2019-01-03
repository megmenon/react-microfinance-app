import React, { Component } from 'react';
import header from '../constants/index.js';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../index.css';

class TransCreate extends Component {
	state = {
		amount: 0,
		visibility: 'visible',
		confirmed: 'hidden'
	}
	handleChange = e => {
		this.setState({
			amount: e.target.value
		})
	}
	handleClick = e => {
		e.preventDefault();
		fetch('https://uat-api.synapsefi.com/v3.1/users/5c10ae89bb650f0068118902/nodes/5c174173d031360068580fdb/trans', {
				method: 'POST',
				headers: header,
				body: JSON.stringify({
						to: {
	    					type: "ACH-US",
	    					"id": "594e6e6c12e17a002f2e39e4"
	  					},
	 					 amount: {
	   						 amount: this.state.amount,
	   						 currency: "USD"
	 					},
						  extra: {
						    ip: "192.168.0.1"
						  }
				})
		})
		.then(res => console.log("done",res))
		.then(res => {
			this.setState({
				amount: '',
				visibility: 'hidden',
				confirmed: 'visible'
				})
			})
	}

	render() {
		return (
			<div>
			<Navbar />
			<section className="main">
				<div className="form">
					<div style={{visibility: this.state.confirmed}}>
						<h4>Done! <br/><br/>
						<Link to='/admin'><button className="waves-light btn-small">Back</button></Link>
						</h4>
					</div>
					<div style={{visibility: this.state.visibility}} >
						<h4>Enter Amount</h4>
						<div>
						    <input placeholder="Enter Amount"type="text" onChange={this.handleChange}/>
					     </div> <br/><br/><br/>
						<button onClick={this.handleClick} className="waves-light btn-small">Confirm</button> <br/><br/>
						<Link to='/admin'><button className="waves-light btn-small">Back</button></Link>
					</div>
				</div>
			</section>
			<Footer />
			</div>
		);
	}
}

export default TransCreate