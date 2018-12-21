import React, { Component } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';


class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="topnav" id="myTopnav">
					<div class="topnav" id="myTopnav">
					  <a class="active"><Link to="/">Home</Link></a>
					  <a><Link to="/register">Apply</Link></a>
					  <a><Link to="/user/5c10ae89bb650f0068118902">My Profile</Link></a>
					  <a><button className="waves-light btn-small">Find My Rate</button></a>
					</div>
  				</nav>
			</div>
		);
	}
}

export default Navbar