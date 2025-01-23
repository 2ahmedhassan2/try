import React from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";

function Header() {
  return (
    <header className="header">
      <h1>Educational Hub</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
