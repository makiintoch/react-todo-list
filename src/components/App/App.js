import React, { Component } from 'react';
import './App.css';
import Todo from '../Todo/Todo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Task List</h1>
        </header>
        <Todo/>
      </div>
    );
  }
}

export default App;
