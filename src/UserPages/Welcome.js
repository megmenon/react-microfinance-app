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
						<div class="row">
						  <div class="column">
						    <div class="card">
						      <h3><b>Get started in Minutes</b></h3>
						      <p>Speed matters. Which is why you can check your loan rates or start investing—online and in minutes.</p>
						    </div>
						  </div>

						  <div class="column">
						    <div class="card">
						      <h3><b>Transparency is out policy</b></h3>
						      <p>We’re big fans of the phrase, “what you see is what you get.” No hidden fees, no hidden meanings.</p>
						    </div>
						  </div>
						  
						  <div class="column">
						    <div class="card">
						      <h3><b>All together now</b></h3>
						      <p>We’re big fans of the phrase, “what you see is what you get.” No hidden fees, no hidden meanings.</p>
						    </div>
						  </div>
						</div>
						 <div class="row">
						 <div className="box">
						    <div class="col l4 m4">
						      <div class="card-panel purple darken-2">
						        <span class="white-text">
						        <h1 className="card-heading">$30 billion in funded loans</h1>
						        I am a very simple card. I am good at containing small bits of information.
						        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
						        </span>
						      </div>
						    </div>
						    <div class="col l4 m4">
						      <div class="card-panel purple darken-3">
						        <span class="white-text">
						        <h1 className="card-heading">600,000 members and counting</h1>
						        I am a very simple card. I am good at containing small bits of information.
						        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
						        </span>
						      </div>
						    </div>
						    <div class="col l4 m4">
						      <div class="card-panel purple darken-4">
						        <span class="white-text">
						        <h1 className="card-heading">98% recommend to a friend</h1> 
						        I am a very simple card. I am good at containing small bits of information.
						        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
						        </span>
						      </div>
						    </div>
						  </div>
						  </div>
						  <h1 className="raise">Get That Raise.
						  <p className="membership">Our membership has it's benefits</p>
						  </h1>
					</section>
				<Footer />
			</div>
		);
	}
}


export default Welcome