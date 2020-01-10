import React from 'react';
import { Link } from '@reach/router';

const StudentCard = ({ student }) => {
  const { name, currentBlock, _id } = student;
  const blockRef = {
    fun: 'Fundamentals',
    be: 'Back-End',
    fe: 'Front-End',
    proj: 'Project Phase',
    grad: 'Graduated'
  };
  return (
    <li className="student-card">
      <Link
        to={`/students/${_id}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <p>{name}</p>
        <p>{blockRef[currentBlock]}</p>
      </Link>
    </li>
  );
};

export default StudentCard;
