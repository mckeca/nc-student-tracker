import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <header>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <p id="home-button">Home</p>
      </Link>
      <h1>NC Student Tracker</h1>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <p id="home-button">Home</p>
      </Link>
    </header>
  );
};

export default Header;
