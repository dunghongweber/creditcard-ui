import React from "react";

const NavBar = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper indigo darken-1">
          <a href="/" className="brand-logo center hide-on-small-only">
            Cards Management
          </a>
          <a href="/" className="brand-logo center hide-on-med-and-up">
            Cards
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="/add">Add Card</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
