import React from 'react';
import '../styles/NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="hire-me">HIRE ME</button>
    </nav>
  );
}

export default Navbar;
