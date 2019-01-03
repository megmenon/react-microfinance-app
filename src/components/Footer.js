import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="footer-box page-footer  deep-purple darken-4">
          <div className="footer-container">
            <div className="row">
              <div className="col l6 s12">
                <p className="grey-text text-lighten-4"></p>
              </div>
              <div className="col l4 offset-l2 s12">
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <h6 className="products"><br/><br/>
                About Us | How it Works | Contact Us | Tweet @So-Fi | Jobs | Blog <br/><br/>
                © 2018 Copyright
              </h6>
            </div>
          </div>
        </footer>
            
			</div>
		);
	}
}

export default Footer