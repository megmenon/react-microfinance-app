import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Register from './components/Register';
import HomePage from './components/HomePage';
import LoanView from './components/LoanView';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Switch>
      	<Route path='/register' component={Register} />
      	<Route path='/user/5c10ae89bb650f0068118902' component={HomePage} />
      	<Route path= '/view/1' component={LoanView} />
        </Switch>
      </div>
    );
  }
}

export default App;
