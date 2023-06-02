import React from 'react';
import styled from 'styled-components';
import teacher from '../../images/teacher.png';
import arrow from '../../images/arrow.png';
import { Link } from 'react-router-dom';

const StyledHome = styled.div`
  max-width: 1500px;
  display: flex;
  justify-content: space-between;

  .home-iconTeacher {
    text-align: left;
    margin-top: 100px;
    width: 35%;
    height: 18%;
    margin-right: 100px;
    margin-left: -85px;
  }

  .home-title {
    color: #00143de7;
    margin-top: 130px;
    text-align: left;
    max-width: 700px;
    font-size: 100px;
    font-family: 'Bad Script', cursive;
    font-family: 'Noto Serif', serif;
  }

  .home-linkToAboutMe {
    margin-top: 100px;
    margin-bottom: 15px;
  }

  .link {
    color: #fab400ff;
    list-style-type: none;
    font: small-caps bold 20px/2 cursive;
    padding-top: 15px;
    text-decoration: none;
  }

  .link:hover {
    transition-duration: 0.6s;
    scale: calc(1.1);
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <img
        className="home-iconTeacher"
        alt="picture_of_teacher"
        src={teacher}
      ></img>
      <h2 className="home-title">
        Hi!
        <br />
        Do you speak english?
        <p className="link home-linkToAboutMe">
          <Link className="link" to={'aboutMe'}>
            Давай скорее знакомиться!
          </Link>
        </p>
        <p className="link home-linkToCourses">
          <Link className="link" to={'courses'}>
            Перейти к списку курсов
          </Link>

          <img alt="arrow" src={arrow} />
        </p>
      </h2>
    </StyledHome>
  );
};

export default Home;
