import React, { Component } from 'react';
import './App.css';
import './css/main.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className={`menu-btn ${this.state.showMenu ? 'close' : '' }`} onClick={this.toggleMenu}>
            <div className="btn-line" />
            <div className="btn-line" />
            <div className="btn-line" />
          </div>

          <nav className={`menu ${this.state.showMenu ? 'show' : '' }`}>
            <ul className={`menu-nav ${this.state.showMenu ? 'show' : '' }`}>
              <li className={`nav-item current ${this.state.showMenu ? 'show' : '' }`}>
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className={`nav-item ${this.state.showMenu ? 'show' : '' }`}>
                <a href="/about" className="nav-link">
                  About Me
                </a>
              </li>
              <li className={`nav-item ${this.state.showMenu ? 'show' : '' }`}>
                <a href="/projects" className="nav-link">
                  Projects
                </a>
              </li>
              <li className={`nav-item ${this.state.showMenu ? 'show' : '' }`}>
                <a href="/contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main id="home">
          <h1 className="lg-heading">
            Dennis <span className="text-secondary">Mok</span>
          </h1>
          <h2 className="sm-heading">
            Front End Software Engineer, Developer & Programmer
          </h2>
          <div className="icons">
            <a href="#!">
              <i className="fab fa-linkedin fa-2x" />
            </a>
            <a href="#!">
              <i className="fab fa-github fa-2x" />
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
