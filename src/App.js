import React from 'react';
import Navbar from './navbar'
import './App.css';

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <header>
        <Navbar />
        </header>
      </div>
    );
  } 
}

export default App;
