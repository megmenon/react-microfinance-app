import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Register from './Pages/Register';
import FBLogin from './Pages/FBLogin';
import HomePage from './Pages/HomePage';
import LoanView from './Pages/LoanView';
import Welcome from './Pages/Welcome';
import ConfirmPay from './Pages/ConfirmPay';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/login' component={FBLogin} />
      	<Route path='/register' component={Register} />
      	<Route path='/user/5c10ae89bb650f0068118902' component={HomePage} />
      	<Route path= '/view/1' component={LoanView} />
        <Route path= '/confirm' component={ConfirmPay} />
        </Switch>
      </div>
    );
  }
}

export default App;
