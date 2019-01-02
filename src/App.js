import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Register from './UserPages/Register';
import LoanView from './UserPages/LoanView';
import Welcome from './UserPages/Welcome';
import ProfilePage from './UserPages/ProfilePage';
import AddForm from './UserPages/AddForm';
import ConfirmPay from './UserPages/ConfirmPay';
import Home from './AdminPages/HomePage';
import UserPage from './AdminPages/UserPage';
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
        <Route path= '/admin' component={Home} />
        <Route path= '/user1' component={UserPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
