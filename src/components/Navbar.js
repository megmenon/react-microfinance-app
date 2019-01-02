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
					  <a href="/profile">User Profile</a>
					  <a href="/admin">Admin</a>
					  <a><button className="waves-light btn-small button">Find My Rate</button></a>
					</div>
  				</nav>
			</div>
		);
	}
}

export default Navbar