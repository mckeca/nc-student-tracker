import React from 'react';
import './App.css';
import Header from './Components/Header';
import { Router } from '@reach/router';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import StudentList from './Components/StudentList';
import StudentPage from './Components/StudentPage';
import AddStudent from './Components/AddStudent';

function App() {
  return (
    <div>
      <Header />
      <div id="main">
        <Navbar />
        <Router>
          <Home path="/" />
          <StudentList path="students" />
          <StudentList path="blocks/:block" />
          <StudentPage path="students/:studentId" />
          <AddStudent path="form" />
        </Router>
      </div>
    </div>
  );
}

export default App;
