import React, { Component } from 'react';
import header from '../constants/index.js';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../index.css'

class HomePage extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: {}
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
				data: data
			})
			console.log(data)
		})
	}
	render() {
		return (
		<div>
		<Navbar/>
			<section className="main">
				<div className="form">
				<h1 className="heading">Welcome!</h1>
					<div>
					
			</div>
			<section className="stories">
			<h5 className="stories">Stories for you</h5> 
				<div class="row">
			    <div class="col s12 m6">
			      <div class="card deep-purple accent-1 darken-1">
			        <div class="card-content white-text">
			          <span class="card-title"><b>5 Tips to Avoid a Personal Loan Denial</b></span>
			          <p>
			          	Use these to tips to help land the loan that you want and avoid personal loan denial: Pull your credit report and credit score. Keep your employment history in check. Pay off your outstanding loans. Keep your payment history regular. Show a steady stream of income.
			          </p>
			        </div>
			        <div class="card-action">
			          <a href="#">Read More</a>
			        </div>
			      </div>
			    </div>
 			 </div>
 			 <div class="row">
			    <div class="col s12 m6">
			      <div class="card purple lighten-5 darken-1">
			        <div class="card-content white-text">
			          <span class="card-title"><b>Do’s and Don’ts for Getting a Small Business Loan</b></span>
			          <p>Any lender who is considering grating your business a loan needs to first get a grip on your finances. The easiest way to do that is to have a separate account and books for your business.
			          Gerri Detweiler, education director for business credit marketplace Nav, said in a phone interview with Small Business Trends, 
			          </p>
			        </div>
			        <div class="card-action">
			          <a href="#">Read More</a>
			        </div>
			      </div>
			    </div>
 			 </div>
			</section>
			</div>
		</section>
	<Footer />
		</div>
		);
	}
}

export default HomePage;