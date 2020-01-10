import axios from 'axios';

export const getStudents = (block, studentId) => {
  let url = 'https://nc-student-tracker.herokuapp.com/api/students';
  if (block) url += `?block=${block}`;
  if (studentId) url += `/${studentId}`;
  return axios.get(url).then(response => {
    return response.data.students
      ? response.data.students
      : response.data.student;
  });
};

export const getBlocks = () => {
  return axios
    .get('https://nc-student-tracker.herokuapp.com/api/blocks')
    .then(response => {
      return response.data.blocks;
    });
};

export const postStudent = student => {
  return axios
    .post('https://nc-student-tracker.herokuapp.com/api/students', student)
    .then(response => {
      console.log(response.data);
      return response.data.student;
    });
};
