import React, { Component } from 'react';
import '../style/App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      enabled: false,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="Grid" id="1"></div>
        <div className="Grid" id="2"></div>
        <div className="Grid" id="3"></div>
        <div className="Grid" id="4"></div>
        <div className="Grid" id="5"></div>
        <div className="Grid" id="6"></div>
        <div className="Grid" id="7"></div>
        <div className="Grid" id="8"></div>
        <div className="Grid" id="9"></div>
      </div>
    );
  }
}

export default App;
