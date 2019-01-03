import React, { Component } from 'react';
import '../index.css';


class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="topnav" id="myTopnav">
					<div className="topnav" id="myTopnav">
					  <a className="active" href="/">Home</a>
					  <a href="/profile">User Profile</a>
					  <a href="/admin">Admin</a>
					  <a href='/'><button className="waves-light btn-small button">Find My Rate</button></a>
					</div>
  				</nav>
			</div>
		);
	}
}

export default Navbar