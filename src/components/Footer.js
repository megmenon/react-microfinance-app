import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div>
				<footer class="footer-box page-footer deep-purple lighten-1">
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
            <div class="container">
            © 2014 Copyright
            <a class="grey-text text-lighten-4 right" href="#!"></a>
            </div>
          </div>
        </footer>
            
			</div>
		);
	}
}

export default Footer