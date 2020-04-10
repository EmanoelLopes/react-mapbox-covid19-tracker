import React, { useState, useEffect } from 'react';
import config from 'config';
import Search from 'Components/Search';
import { getTheLastDay } from 'helpers';

const Aside = () => {
  const [historical, setHistorical] = useState({});
  const { historicalAll } = config;

  const getHistorical = () =>
    fetch(historicalAll)
      .then((r) => r.json())
      .then((data) => setHistorical(data));

  useEffect(() => {
    getHistorical();
  }, []);

  const { cases, deaths, recovered } = historical;

  return (
    <aside className="aside-content">
      <h1>COVID 19 Tracker</h1>
      <h2>Historical</h2>
      <p>
        Cases:
        <strong>
          {' '}
          {cases && cases[getTheLastDay()]}
        </strong>
      </p>
      <p>
        Deaths:
        <strong>
          {' '}
          {deaths && deaths[getTheLastDay()]}
        </strong>
      </p>
      <p>
        Recovereds:
        {' '}
        <strong>
          {recovered && recovered[getTheLastDay()]}
        </strong>
      </p>
      <Search />
    </aside>
  );
};

export default Aside;