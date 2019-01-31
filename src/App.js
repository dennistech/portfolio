import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import './css/main.css';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { TimeTracker } from './components/TimeTracker';
import { Midnite } from './components/Midnite';
import { Jackpot } from './components/Jackpot';
import { Contact } from './components/Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/experience" component={Experience} exact />
          <Route path="/timetracker" component={TimeTracker} exact />
          <Route path="/midnite" component={Midnite} exact />
          <Route path="/jackpot" component={Jackpot} exact />
          <Route path="/contact" component={Contact} exact />

          <footer id="main-footer">
            Copyright &copy; 2018
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
