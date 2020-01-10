import React, { Component } from 'react';
import { getStudents } from './api';

class StudentPage extends Component {
  state = {
    student: {}
  };

  componentDidMount() {
    getStudents(null, this.props.studentId).then(student => {
      this.setState({ student });
    });
  }

  render() {
    const { student } = this.state;
    return (
      <section id="student-page">
        <h2>{student.name}</h2>
        <ul id="student-block-history">
          {student.blockHistory ? (
            student.blockHistory.map(block => {
              return <li>{block.name}</li>;
            })
          ) : (
            <p>hang on</p>
          )}
        </ul>
      </section>
    );
  }
}

export default StudentPage;
