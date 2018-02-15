import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="container">
      <ul className="nav nav-tabs">
        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" exact to='/'>Home</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/about'>About</NavLink></li>
      </ul>
  </header>
);
export default Header;
