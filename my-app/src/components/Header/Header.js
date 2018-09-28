import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav className="sticky">
        <div className="container">
          <div className="row">
            <ul className="col-md-12">
              <li className="col-md-3">Clicky game</li>
              <li className="col-md-5">Click an image to begin!</li>
              <li className="col-md-4">Score: 0 | Top Score: 0</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
