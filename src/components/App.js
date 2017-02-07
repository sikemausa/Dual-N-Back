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
      <div className="grid-container">
        <div className="row">
          <div className="square" id="1"></div>
          <div className="square" id="2"></div>
          <div className="square" id="3"></div>
        </div>
        <div className='row'>
          <div className="square" id="4"></div>
          <div className="square" id="5"></div>
          <div className="square" id="6"></div>
        </div>
        <div className="row">
          <div className="square" id="7"></div>
          <div className="square" id="8"></div>
          <div className="square" id="9"></div>
        </div>
      </div>
    );
  }
}

export default App;
