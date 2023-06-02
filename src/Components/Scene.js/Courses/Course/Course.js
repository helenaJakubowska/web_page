import React from 'react';
import styled from 'styled-components';

const aboutCourse = [
  {
    titlePage: 'Разговорный английский',
    about: 'lorem lorem lorem lorem lorem',
    index: 1,
  },
];

const Course = () => {
  return <h3>{aboutCourse.titlePage}</h3>;
};

export default Course;
