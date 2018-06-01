import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'default'
    }
  }
  render() {
    return (
      <div className={`App ${this.state.theme}`}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button datatheme="default" onClick={this._switchTheme}>Default</button>
          <button datatheme="green" onClick={this._switchTheme}>Green</button>
          <button datatheme="red" onClick={this._switchTheme}>Red</button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  _switchTheme = (e) => {
    let theme = e.target.getAttribute('datatheme');
    this.setState({theme}, () => {

      console.log("this.state", this.state);
    });
  }
}

export default App;
