import React, { Fragment } from 'react';
import Header from 'Components/Header';
import Aside from 'Components/Aside';
import MapContainer from 'Components/MapContainer';
import * as S from './styled';

const Layout = () => (
  <Fragment>
    <Header />
    <S.MainContainer>
      <Aside />
      <MapContainer />
    </S.MainContainer>
  </Fragment>
);

export default Layout;

