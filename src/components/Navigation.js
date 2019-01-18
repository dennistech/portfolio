import React from 'react';

export class Navigation extends React.Component {
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
    )
  }
}
