import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import bigBen from '../../images/bigBen.png';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100px;
  position: fixed;
  width: 100%;
  padding: 0 80px;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.9);

  .header-iconPlusTitle {
    display: flex;
  }

  .bigBen-icon {
    scale: calc(0.5);
  }

  .bigBen-icon:hover {
    transform: rotate(360deg);
    transition-duration: 0.6s;
  }

  .header-title {
    cursor: pointer;
    color: #e7bd89ff;
    font: small-caps bold 40px/2 cursive;
  }

  .header-nav-flex {
    display: flex;
  }

  .header-nav-item {
    color: #fab400ff;
    list-style-type: none;
    font: small-caps bold 20px/2 cursive;
    margin-left: 60px;
    padding-top: 20px;
    text-decoration: none;
  }

  .link {
    color: #fab400ff;
    list-style-type: none;
    font: small-caps bold 20px/2 cursive;
    padding-top: 20px;
    text-decoration: none;
  }

  .header-nav-item:hover {
    cursor: pointer;
    scale: calc(1.2);
    transition-duration: 0.6s;
    border-bottom: solid 1px #e7bd89ff;
    margin-top: 5px;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-iconPlusTitle">
        <img className="bigBen-icon" alt="bigben" src={bigBen} />

        <Link className="link " to={'/'}>
          <h1 className=" header-title">P R O G R E S S</h1>
        </Link>
      </div>

      <nav className="header-nav">
        <ul className="header-nav-flex">
          <li className="header-nav-item">
            <Link className="link" to={'/'}>
              главная
            </Link>
          </li>
          <li className="header-nav-item">
            <Link className="link" to={'aboutMe'}>
              обо мне
            </Link>
          </li>
          <li className="header-nav-item">
            <Link className="link" to={'courses'}>
              все о курсах
            </Link>
          </li>
          <li className="header-nav-item">
            <Link className="link" to={'reviews'}>
              отзывы
            </Link>
          </li>
          <li className="header-nav-item">
            <Link className="link" to={'contacts'}>
              контакты
            </Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
export default Header;
