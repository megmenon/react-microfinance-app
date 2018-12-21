import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div>
				<footer class="footer-box page-footer  deep-purple darken-4">
          <div class="footer-container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text"></h5>
                <p class="grey-text text-lighten-4"></p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text"></h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!"></a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"></a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"></a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"></a></li>
                </ul>
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