import React, { Component } from 'react';
import AddForm from './components/AddForm';
import './index.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h3 className="heading">Let's start with a few basics.</h3>
        <AddForm />
      </div>
    );
  }
}

export default App;
