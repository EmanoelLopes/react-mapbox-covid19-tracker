import React, { Fragment, Suspense, lazy } from 'react';
import Header from 'Components/Header';
import Aside from 'Components/Aside';
import Wait from 'Components/Wait';
import * as S from './styled';

const MapContainer = lazy(() => import('Components/MapContainer'));

const Layout = () => (
  <Fragment>
    <Header />
    <S.MainContainer>
      <Aside />
      <Suspense fallback={<Wait />}>
        <MapContainer />
      </Suspense>
    </S.MainContainer>
  </Fragment>
);

export default Layout;

