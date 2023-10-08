import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  height: 50px;
  position: fixed;
  width: 100%;
  padding: 0 80px;
  left: 0;
  bottom: 0;

  background-color: rgba(255, 255, 255, 0.9);

  .footer {
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer">
        <a href="https://ru.freepik.com/free-vector/grid-pattern-background-minimal-black-and-white-simple-design-vector_20170461.htm#page=2&query=checkered&position=18&from_view=search&track=sph">
          Изображения от rawpixel.com на Freepik
        </a>{' '}
        на Freepik
      </div>
    </StyledFooter>
  );
};
export default Footer;
