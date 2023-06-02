import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex: 0 0 auto;
  background-color: rgba(255, 255, 255, 0.7);
`;

const Footer = () => {
  return (
    <StyledFooter>
      <footer>
        Изображение от rawpixel.com на Freepik
        <a href="https://ru.freepik.com/free-vector/grid-pattern-background-minimal-black-and-white-simple-design-vector_20170461.htm#page=2&query=checkered&position=18&from_view=search&track=sph">
          Изображение от rawpixel.com
        </a>{' '}
        на Freepik
      </footer>
    </StyledFooter>
  );
};
export default Footer;
