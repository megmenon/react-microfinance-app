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
					<section className="myloans">
						<h5>My Loans</h5>
						<table className="loans">
				        <thead>
				          <tr>
				              <th>Description</th>
				              <th>Balance</th>
				              <th>Due Date</th>
				          </tr>
				        </thead>

				        <tbody>
				          <tr className="tr">
				            <td>Food Truck</td>
				            <td>$2000</td>
				            <td>Dec 20, 2018</td>
				            <Link to="/view/1"><button onClick={this.handleClick} class="waves-light btn-small">View</button></Link> <br/>
				            <Link to="/confirm"><button onClick={this.handleClick} class="waves-light btn-small">Pay</button></Link>
				          </tr>
				          <tr className="tr">
				            <td>Truck maintenance</td>
				            <td>$500</td>
				            <td>Jan 1, 2019</td>
				            <a class="waves-light btn-small">View</a><br/>
				            <a class="waves-light btn-small">Pay</a>
				          </tr>
				          <tr className="tr">
				            <td>Home repair</td>
				            <td>$0</td>
				            <td className="status">Complete</td>
				            <a class="waves-light btn-small">View</a>
				          </tr>
				        </tbody>
				      </table>
       			</section>
			</div>
			<section>
			<h5>Stories for you</h5> 
			<div className="row">
				<div className="col s12 m3">
					<div className="card card-1 tentips darken-1">
						<div className="card-content white-text">
					        <span className="card-title">
					        	10 tips when applying for a personal loan
					        </span>
					        <p>
						        I am a very simple card. I am good at containing small bits of information.
						        I am convenient because I require little markup to use effectively.
					        </p>
						</div>
						<div className="card-action">
						<a>Read More</a>
						</div>
					</div>
					</div>
					<div class="col1 s12 m3">
					      <div class="card-panel teal">
					        <span class="white-text">I am a very simple card. I am good at containing small bits of information.
					        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
					        </span>
					      </div>
					    </div>
						<div className="col s12">
							<div className="card card-2 business darken-1">
								<div className="card-content white-text">
							        <span className="card-title">
							        	3 tips for negotiating a business loan
							        </span>
							        <p>
								        I am a very simple card. I am good at containing small bits of information.
								        I am convenient because I require little markup to use effectively.
							        </p>
								</div>
								<div className="card-action">
								<a>Read More</a>
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