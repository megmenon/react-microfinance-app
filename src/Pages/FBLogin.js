import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../index.css'

class FBLogin extends Component {
	state= {
		isLoggedIn: false,
		name: '',
		picture: '',
		redirect: false
	}

	responseFacebook = res => {
		this.setState({
			isLoggedIn: true,
			name: res.name,
			picture: res.picture.data.url,
			redirect: true
		})
	}

	componentClicked = () => {
		console.log("hello")
	}

	render() {
		let content;

		if(this.state.isLoggedIn){
			content = (
				<div>
					<img src={this.state.picture} alt={this.state.name}/>
				<h1 className="heading">Welcome, {this.state.name}</h1>
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
				            <Link to="/view/1"><button class="waves-light btn-small">View</button></Link> <br/>
				            <Link to="/confirm"><button class="waves-light btn-small">Pay</button></Link>
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
			)
		}
		else{
			content = (
				<FacebookLogin
    				appId="218315162438666"
    				autoLoad={true}
    				fields="name,picture"
    				onClick={this.componentClicked}
    				callback={this.responseFacebook} 
    				/>
			)
		}
		return (
			<div>
			<Navbar />
			<section className="container">
			<div className="form">
				<div className="facebook">
					{content}
				</div>
			</div>
			</section>
			<Footer />
			</div>
		);
	}
}


export default FBLogin