import React, { Component } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';


class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="topnav" id="myTopnav">
					<div class="topnav" id="myTopnav">
					  <a class="active" href="/">Home</a>
					  <a href="/register">Register</a>
					  <a href="/profile">My Profile</a>
					  <a><button className="waves-light btn-small button">Find My Rate</button></a>
					</div>
  				</nav>
			</div>
		);
	}
}

export default Navbar