import React from 'react';
import { Link } from '@reach/router';

const Navbar = ({ blocks }) => {
  return (
    <ul>
      {blocks.map(block => {
        return (
          <li>
            <Link to={`/students/${block}`}>{block}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
