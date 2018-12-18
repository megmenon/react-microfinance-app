import React, { Component } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';


class Navbar extends Component {
	render() {
		return (
			<div>
				 <nav>
				    <div className="nav-wrapper deep-purple darken-4">
				    <div>
				      <a href="#" className="brand-logo">
				      	<button className="deep-purple darken-4 btn"><b>SO-fi</b></button>
				      	</a>
				      </div>
				      <ul id="nav-mobile" className="right hide-on-med-and-down">
				        <li><Link to="/register">Apply</Link></li>
				         <li><Link to="/">Home</Link></li>
				         <li><Link to="/user/5c10ae89bb650f0068118902">My Profile</Link></li>
				        <li><a class="waves-light btn">FIND MY RATE</a></li>
				      </ul>
				    </div>
  				</nav>
			</div>
		);
	}
}

export default Navbar