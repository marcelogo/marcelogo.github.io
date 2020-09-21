import React, { Component } from "react";
import { HashRouter, NavLink } from "react-router-dom";
import "../stylesheets/Menu.css";

class Menu extends Component {
  handleToggle() {
    this.props.handleToggle();
  }

  render() {
    return (
      <HashRouter>
        <div className="Menu">
          <div
            className={`overlay ${
              this.props.isToggleOn
                ? "overlay-slide-left"
                : "overlay-slide-right"
            }`}
          >
            <nav>
              <ul>
                <li
                  onClick={this.handleToggle.bind(this)}
                  className={
                    this.props.isToggleOn ? "slide-out-1" : "slide-in-1"
                  }
                >
                  <NavLink to="/">Home</NavLink>
                </li>
                <li
                  onClick={this.handleToggle.bind(this)}
                  className={
                    this.props.isToggleOn ? "slide-out-2" : "slide-in-2"
                  }
                >
                  <NavLink to="/aboutMe">About me</NavLink>
                </li>
                <li
                  onClick={() => {
                    this.props.handleToggle();
                    this.props.handleClick("ProjectsLP");
                  }}
                  className={
                    this.props.isToggleOn ? "slide-out-3" : "slide-in-3"
                  }
                >
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                <li
                  onClick={this.handleToggle.bind(this)}
                  className={
                    this.props.isToggleOn ? "slide-out-4" : "slide-in-4"
                  }
                >
                  <NavLink to="/contacts">Contacts</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          {/* <ul>
          <li>
            <NavLink to="/Projects">My Dog</NavLink>
          </li>
          <li>
            <NavLink to="/AboutMe">My Cat</NavLink>
          </li>
        </ul> */}
        </div>
      </HashRouter>
    );
  }
}

export default Menu;
