import React, { Component } from 'react';
import header from '../constants/index.js';
import '../index.css'

class ConfirmPay extends Component {
	constructor(props){
		super(props)
		this.state = {
			amount: 25.50,
			visibility: 'visible',
			confirmed: 'hidden',
			errors: {}
		}
	}

	handleChange = e => {
			this.setState({
			amount: e.target.value
		})
	}

	handleClick = e => {
		if(this.state.amount < 25.50){

			alert("Minimum is $25.50!")
		}
		else{
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
	}

	render() {
		return (
		<div>
			<section className="main">
				<div className="form">
					<div style={{visibility: this.state.visibility}} >
						<h4>Minimum Amount = $25.50</h4>
						<h6> $25 + Interest 2% ($0.50)</h6>
						<div>
						    <input placeholder="Enter Amount"type="text" name="amount" onChange={this.handleChange}/>
					     </div>
						<button onClick={this.handleClick} className="waves-light btn-small">Confirm</button> 
					</div>
					<section className="main">
					<div className="form">
					<h4 style={{visibility: this.state.confirmed}}>Done!</h4>
					</div>
					</section>
				</div>
			</section>
		</div>
		)
	}
}

export default ConfirmPay