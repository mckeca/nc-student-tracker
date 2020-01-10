import React, { Component } from 'react';
import { Link } from '@reach/router';
import { getBlocks } from './api';

class Navbar extends Component {
  state = {
    blocks: [],
    blockRef: {
      fun: 'Fundamentals',
      be: 'Back-End',
      fe: 'Front-End',
      proj: 'Project Phase',
      grad: 'Graduated'
    }
  };

  componentDidMount = () => {
    getBlocks().then(blocks => {
      const blockSlugs = blocks.map(block => {
        return block.slug;
      });
      this.setState({ blocks: blockSlugs });
    });
  };

  render() {
    const { blocks, blockRef } = this.state;
    return (
      <ul id="navbar">
        <li key="All">
          <Link
            to="/students"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <section className="nav-button">
              <p>All</p>
            </section>
          </Link>
        </li>
        {blocks.length &&
          blocks.map(block => {
            return (
              <li key={block}>
                <Link
                  to={`/blocks/${block}`}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <section className="nav-button">
                    <p>{blockRef[block]}</p>
                  </section>
                </Link>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default Navbar;
