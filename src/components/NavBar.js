import React from "react";

const NavBar = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper indigo darken-1">
          <a href="/creditcard-ui/" className="brand-logo center">
            Cards Management
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="/creditcard-ui/add">Add Card</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
