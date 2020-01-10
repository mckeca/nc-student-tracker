import React, { Component } from 'react';

class AddStudent extends Component {
  state = { name: '', cohort: 1, showForm: false };

  render() {
    const { showForm } = this.state;
    return (
      <section id="main-display">
        {showForm ? (
          <form onSubmit={this.addStudent}>
            <label>
              Student Name:
              <input
                onChange={this.handleChange}
                type="text"
                id="new-student-name"
                name="name"
                value={this.state.name}
              />
            </label>
            <label>
              Starting Cohort:
              <input
                onChange={this.handleChange}
                type="number"
                id="new-student-cohort"
                name="cohort"
                min="1"
                max="5"
                value={this.state.cohort}
              />
            </label>
            <button type="submit">Submit Student</button>
          </form>
        ) : (
          <button id="add-student-btn" onClick={this.showForm}>
            New Student
          </button>
        )}
      </section>
    );
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addStudent = event => {
    const { name, cohort } = this.state;
    const { insertStudent } = this.props;
    event.preventDefault();
    insertStudent(name, cohort);
    this.setState({ showForm: false });
  };

  showForm = () => {
    this.setState({ showForm: true });
  };
}

export default AddStudent;
