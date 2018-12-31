import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Register from './Pages/Register';
import LoanView from './Pages/LoanView';
import Welcome from './Pages/Welcome';
import ProfilePage from './Pages/ProfilePage';
import AddForm from './Pages/AddForm';
import ConfirmPay from './Pages/ConfirmPay';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Switch>
        <Route exact path='/' component={Welcome} />
      	<Route path='/register' component={Register} />
        <Route path= '/profile' component={ProfilePage} />
      	<Route path= '/view' component={LoanView} />
        <Route path= '/new' component={AddForm} />
        <Route path= '/confirm' component={ConfirmPay} />
        </Switch>
      </div>
    );
  }
}

export default App;
