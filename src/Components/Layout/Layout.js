import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const StyledLayout = styled.div`
  position: relative;

  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 100%;
  margin: 0 auto;
`;

const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <Outlet />
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
