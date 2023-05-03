import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <Link to="/" className="initial" />
          <li>initial</li>

          <Link to="/professionals/add" className="add" />
          <li>Add professional</li>

          <Link to="/professionals" className="professionals" />
          <li>All professionals</li>
        </ul>
      </nav>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-times"></i>
        )}
      </button>
    </>
  );
}

export default Navbar;
