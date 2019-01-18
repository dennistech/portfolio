import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import './css/main.css';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Route path="/" component={Home} exact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
