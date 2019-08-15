import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <div>
    <ul className="nav">
      <li><a href="/">Home</a></li>
      <li><a href="/newAddress">Add New Address</a></li>
    </ul>
  </div>
);

export default Navbar;