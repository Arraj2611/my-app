// import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'tachyons';

class App extends React.Component {
  render() {
    return (
      <div className="f1 tc">
        <h1>Hello world</h1>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

export default App;
