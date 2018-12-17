import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../index.css'
class Welcome extends Component {
	render() {
		return (
			<div>
				<section className="main">
						<Navbar />
						<section className="container">
						<img className= "image" src={require('../microfi2.png')}/>
						</section>
						<h1>Get Your Money Right.</h1>
						<section className="container">
						<div class="row">
    						<div class="col s12 m3">
						      <div class="card-panel card1 purple darken-1">
						        <span class="white-text"><b>Get started in minutes</b>
						        </span>
						      </div>
   						 	</div>
   						 	<div class="col s12 m3">
						      <div class="card-panel card1 purple darken-1">
						        <span class="white-text"><b>Transparency is our policy</b><br/>
						        </span>
						      </div>
   						 	</div>
   						 	<div class="col s12 m3">
						      <div class="card-panel card1 purple darken-1">
						        <span class="white-text"><b>All together now</b>
						        </span>
						      </div>
   						 	</div>
   						 	<div class="col s12 m3">
						      <div class="card-panel card1 purple darken-1">
						        <span class="white-text"><b>600,000 members and counting</b>
						        </span>
						      </div>
   						 	</div>
  						</div>
  						<div class="row">
					    <div class="col s12 m5">
					      <div class="card darken-1 teal">
					        <div class="card-content black-text">
					          <span class="card-title">Student Loan Refi</span>
					          <p>I am a very simple card. I am good at containing small bits of information.
					          I am convenient because I require little markup to use effectively.</p>
					        </div>
					      </div>
					    </div>
					    <div class="col s12 m5">
					      <div class="card darken-1">
					        <div class="card-content black-text">
					          <span class="card-title">Personal Loans</span>
					          <p>I am a very simple card. I am good at containing small bits of information.
					          I am convenient because I require little markup to use effectively.</p>
					        </div>
					      </div>
					    </div>
					    <div class="col s12 m5">
					      <div class="card darken-1">
					        <div class="card-content black-text">
					          <span class="card-title">Small Business Loans</span>
					          <p>I am a very simple card. I am good at containing small bits of information.
					          I am convenient because I require little markup to use effectively.</p>
					        </div>
					      </div>
					    </div>
					    <div class="col s12 m5">
					      <div class="card darken-1 teal">
					        <div class="card-content black-text">
					          <span class="card-title">MicroFi Money</span>
					          <p>I am a very simple card. I am good at containing small bits of information.
					          I am convenient because I require little markup to use effectively.</p>
					        </div>
					      </div>
					    </div>
					  </div>
				</section>
				</section>
				<Footer />
			</div>
		);
	}
}


export default Welcome