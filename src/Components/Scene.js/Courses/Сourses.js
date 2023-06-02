import React from 'react';
import styled from 'styled-components';
import upLevel from '../../../images/upLevel.jpg';
import forUniversity from '../../../images/forUniversity.jpg';
import forKids from '../../../images/forKids.jpg';
import forSpeak from '../../../images//forSpeak.jpg';
import forIT from '../../../images/forIT.jpg';
import { Link } from 'react-router-dom';

const StyledCourses = styled.div`
  max-width: 1500px;

  .courses-title {
    margin-top: 80px;
    text-align: center;
    color: #4546ecff;
    font: small-caps bold 30px/2 cursive;
  }

  .courses-variants {
    display: flex;
    flex-wrap: wrap;
  }

  .courses-variants-item {
    list-style-type: none;
    padding: 25px 10px;
    width: 250px;
    min-height: 350px;
    margin: 55px 10px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

    .courses-variants-item-img {
      margin-top: 20px;
      width: 200px;
      height: 140px;
    }
  }

  .courses-variants-item:hover {
    scale: calc(1.2);
    transition-duration: 0.6s;

    border: 1px solid #fab400ff;
    border-radius: 10px;
  }
`;
const courses = [
  {
    title: 'Английский по уровням',
    imgOfCourse: upLevel,
    to: '/upLevel',
  },
  {
    title: 'Английский для детей',
    imgOfCourse: forKids,
    to: '/forKids',
  },
  {
    title: 'Разговорный английский',
    imgOfCourse: forSpeak,
    to: '/forSpeak',
  },
  {
    title: 'Английский для поступления',
    imgOfCourse: forUniversity,
    to: '/forUniversity',
  },
  { title: 'Английский для IT', imgOfCourse: forIT, to: '/forIt' },
];

const Courses = () => {
  const listCourses = courses.map((course) => (
    <li className="courses-variants-item" key={course.title}>
      {course.title}
      <img
        alt="imageForCourse"
        className="courses-variants-item-img "
        key={course.index}
        src={course.imgOfCourse}
      ></img>
      <Link key={course.to} to={course.to}>
        {' '}
        Подробнее...
      </Link>
    </li>
  ));

  return (
    <StyledCourses>
      <h3 className="courses-title">Я предлагаю тебе курсы:</h3>
      <ul className="courses-variants">{listCourses}</ul>
    </StyledCourses>
  );
};

export default Courses;
