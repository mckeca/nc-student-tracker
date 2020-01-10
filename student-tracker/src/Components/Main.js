import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import Navbar from './Navbar';
import StudentList from './StudentList';

class Main extends Component {
  state = { blocks: ['fun', 'be', 'fe', 'proj', 'grad'] };
  render() {
    return (
      <div>
        <Navbar blocks={this.state.blocks} />
        <StudentList />
      </div>
    );
  }
}

export default Main;
