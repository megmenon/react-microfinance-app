import React, { Component } from 'react';
import header from '../constants/index.js';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../index.css';

class UserTrans extends Component {
	state = {
		data: [],
		amount: [],
		transInfo: [],
		userInfo: [],
		name: [],
		transStatus: [],
		tranID: []
	}
	componentDidMount = () => {
			fetch('https://uat-api.synapsefi.com/v3.1/users/5c10ae89bb650f0068118902/trans?page=1', {
			method: 'GET',
			headers: header
		})
		.then(res => res.json())
		.then(data => {
			this.setState({
				data: [],
				amount: data.trans[0].amount,
				transInfo: data.trans[0].from,
				userInfo: data.trans[0].from.user,
				name:data.trans[0].from.user.legal_names[0],
				transStatus: data.trans[0].recent_status
			})
			console.log(data)
			console.log(this.state.amount)
			console.log(this.state.userInfo)
		})
	}

	handleClick = e => {
		if(window.confirm('Are you sure?')){
			e.preventDefault();
			fetch('https://uat-api.synapsefi.com/v3.1/users/5c10ae89bb650f0068118902/nodes/5c174173d031360068580fdb/trans/5c2d6bde775f10008bb7745c', {
				method: 'DELETE',
				headers: header
		})
		.then(res => console.log("done",res))

		}
	}

    render() {
    	let amount = this.state.amount
    	let transaction = this.state.transInfo
    	let userInfo = this.state.userInfo
    	let status = this.state.transStatus

    	let amountValue , currency, id, type, userID, userName, nickName, stat, date

    	if(amount && transaction && userInfo && status){
    		amountValue = amount.amount
    		console.log(amountValue)
    		currency = amount.currency
    		nickName = transaction.nickname
    		id = transaction.id
    		type = transaction.type
    		userID = userInfo._id
    		userName = this.state.name
    		stat = status.status
    	}

        return (
        <div>
        <Navbar />
            <section className="main">
				<div className="form">
	            	<table className="t">
				    <thead>
						<tr>
				      		<th scope="col">Transaction ID</th>
				      		<th scope="col">User ID</th>
				      		<th scope="col">Name</th>
				      		<th scope="col">Type</th>
				      		<th scope="col">Amount</th>
				      		<th scope="col">Currency</th>
				      		<th scope="col">Status</th>
				    	</tr>
					</thead>
				        <tbody className="td">
				        <tr>
					    <td>{id}</td>
				        <td>{userID}</td>
				        <td>{userName}</td>
				        <td>{nickName} <br/> {type}</td>
				        <td>{amountValue}</td>
				        <td>{currency}</td>
				        <td>{stat}</td>
						</tr>
				        </tbody>
     		 		</table><br/><br/><br/>
     		 		<Link to="/admin"><button className="waves-light btn-small">Back</button></Link>
     		 	</div>
     		</section>
     	<Footer />
        </div>
        );
    }
}

export default UserTrans;
