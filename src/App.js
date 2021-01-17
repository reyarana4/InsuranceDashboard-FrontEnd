import logo from './logo.svg';
import './App.css';
import React from 'react';
import InsuranceDataView from './views/index';
class App extends React.Component{

  state = {loading:true}
  render(){
    const {loading} = this.state;
    return (
      <InsuranceDataView/>
    )
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
