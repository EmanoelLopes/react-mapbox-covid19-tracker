import React, { useState, useEffect } from 'react';
import config from 'config';
import Search from 'Components/Search';
import * as S from './styled';
import { getTheLastDay } from 'helpers';

const Aside = () => {
  const [historical, setHistorical] = useState({});
  const { historicalAll } = config;

  const getHistorical = () =>
    fetch(historicalAll)
      .then((r) => r.json())
      .then((data) => {
        setHistorical(data);
      });

  useEffect(() => {
    getHistorical();
  }, []);

  const { cases, deaths, recovered } = historical;

  return (
    <S.AsideContent>
      <S.AsideContainer>
        <h2>
          Total Cases:
          <strong> {cases && cases[getTheLastDay()]}</strong>
        </h2>
        <p className="active-cases">
          Active Cases:{' '}
          <strong>
            {cases &&
              cases[getTheLastDay()] -
                deaths[getTheLastDay()] -
                recovered[getTheLastDay()]}
          </strong>
        </p>
        <p className="deaths">
          Deaths:
          <strong> {deaths && deaths[getTheLastDay()]}</strong>
        </p>
        <p className="recovered">
          Recovereds: <strong>{recovered && recovered[getTheLastDay()]}</strong>
        </p>
        <p>
          <small>* Last update: {getTheLastDay()}</small>
        </p>
      </S.AsideContainer>
      <Search />
    </S.AsideContent>
  );
};

export default Aside;
