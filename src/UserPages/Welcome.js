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
						<img className= "image" alt="" src={require('../microfi2.png')}/>
					</section>
						<h1>Get Your Money Right.</h1>
						<div className="row">
						  <div className="column">
						    <div className="card">
						      <h3><b>Get started in Minutes</b></h3>
						      <p>Speed matters. Which is why you can check your loan rates or start investing—online and in minutes.</p>
						    </div>
						  </div>

						  <div className="column">
						    <div className="card">
						      <h3><b>Transparency is out policy</b></h3>
						      <p>We’re big fans of the phrase, “what you see is what you get.” No hidden fees, no hidden meanings.</p>
						    </div>
						  </div>
						  
						  <div className="column">
						    <div className="card">
						      <h3><b>All together now</b></h3>
						      <p>We’re big fans of the phrase, “what you see is what you get.” No hidden fees, no hidden meanings.</p>
						    </div>
						  </div>
						</div>
						 <div className="row">
						 <div className="box">
						    <div className="col l4 m4">
						      <div className="card-panel purple darken-2">
						        <span className="white-text">
						        <h1 className="card-heading">$30 billion in funded loans</h1>
						        I am a very simple card. I am good at containing small bits of information.
						        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
						        </span>
						      </div>
						    </div>
						    <div className="col l4 m4">
						      <div className="card-panel purple darken-3">
						        <span className="white-text">
						        <h1 className="card-heading">600,000 members and counting</h1>
						        I am a very simple card. I am good at containing small bits of information.
						        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
						        </span>
						      </div>
						    </div>
						    <div className="col l4 m4">
						      <div className="card-panel purple darken-4">
						        <span className="white-text">
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
					<div id="foot">
						<div className="container">
		     				 <h6 className="products"><br/><br/>
				                About Us | How it Works | Contact Us | Tweet @So-Fi | Jobs | Blog <br/><br/>
				                © 2018 Copyright
		      				</h6>  
      					</div> 
					</div>
			</div>
		);
	}
}


export default Welcome