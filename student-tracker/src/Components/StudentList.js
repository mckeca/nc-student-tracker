import React, { Component } from 'react';
import { getStudents } from './api';
import StudentCard from './StudentCard';
import AddStudent from './AddStudent';
import { postStudent } from './api';

class StudentList extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    getStudents(this.props.block).then(students => {
      this.setState({ students });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.block !== this.props.block) {
      getStudents(this.props.block).then(students => {
        this.setState({ students });
      });
    }
  }

  render() {
    const { students } = this.state;
    return (
      <section>
        <AddStudent insertStudent={this.insertStudent} />
        <ul id="student-list">
          {students.map(student => {
            return <StudentCard key={student._id} student={student} />;
          })}
        </ul>
      </section>
    );
  }

  insertStudent = (name, cohort) => {
    postStudent({ name: name, startingCohort: cohort }).then(student => {
      this.setState(currentState => {
        return { students: [student, ...currentState.students] };
      });
    });
  };
}

export default StudentList;
