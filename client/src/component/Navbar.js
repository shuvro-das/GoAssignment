import React from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";

import { IconContext } from "react-icons/lib";

function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo">
              GoComet Assignment
            </Link>

            <ul className="nav-menu">
              <li className="nav-item">
                {/* <Link to="/extrafeatures" className="nav-links">
                  Extra Features
                </Link> */}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
