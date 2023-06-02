import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import first from '../Carousel/sertificate/first.jpg';
import second from '../Carousel/sertificate/second.jpg';
import third from '../Carousel/sertificate/third.jpg';
import styled from 'styled-components';

const StyledCarousel = styled.div`
  display: flex;
  justify-content: center;
`;

function NoTransitionExample() {
  return (
    <StyledCarousel>
      <Carousel slide={false}>
        <Carousel.Item>
          <img className="d-block w-50" src={first} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-50" src={second} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-50" src={third} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </StyledCarousel>
  );
}

export default NoTransitionExample;
