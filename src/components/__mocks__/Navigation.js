import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import '../Navigation.css';

const Navbar = [
  { to: '/', text: 'Home  |' },
  { to: '/calculator', text: 'Calculator  |' },
  { to: '/hittheapi', text: 'Quote  |' },
];

const Nav = () => (
  <BrowserRouter>
    <nav className="navigation">
      <h1>Math Magicians</h1>
      <ul className="item">
        {Navbar.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} className="links">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </BrowserRouter>
);

export default Nav;
