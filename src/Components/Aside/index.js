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
      <h1>
        <span role="img" aria-label="virus">
          🦠
        </span>
        COVID-19 Tracker
        <span role="img" aria-label="virus">
          🦠
        </span>
      </h1>
      <div className="aside-container">
        <h2>
          Total Cases:
          <strong> {cases && cases[getTheLastDay()]}</strong>
        </h2>
        <p>
          Active Cases:{' '}
          <strong>
            {cases &&
              cases[getTheLastDay()] -
                deaths[getTheLastDay()] -
                recovered[getTheLastDay()]}
          </strong>
        </p>
        <p>
          Deaths:
          <strong> {deaths && deaths[getTheLastDay()]}</strong>
        </p>
        <p>
          Recovereds: <strong>{recovered && recovered[getTheLastDay()]}</strong>
        </p>
      </div>
      <Search />
      <div className="social-media">
        <a
          href="https://github.com/EmanoelLopes/react-mapbox-covid19-tracker"
          target="_blank"
          rel="noopener"
          title="Github"
        >
          <box-icon
            type="logo"
            name="github"
            size="lg"
            color="#4c4c5c"
          />
        </a>
      </div>
    </aside>
  );
};

export default Aside;
