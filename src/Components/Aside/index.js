import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import config from 'config';
import Search from 'Components/Search';
import * as S from './styled';
import { getTheLastDay } from 'helpers';

const Aside = () => {
  const [historical, setHistorical] = useState({});
  const [chartData, setChartData] = useState([]);
  const { historicalAll } = config;

  const getHistorical = () =>
    fetch(historicalAll)
      .then((r) => r.json())
      .then((data) => {
        setHistorical(data);
        setChartData([
          ...Object.keys(data.cases).map((item, index) => {
            return {
              name: item,
              cases: Object.values(data.cases)[index],
            };
          })
        ]);
      });

  useEffect(() => {
    getHistorical();
  }, []);

  const { cases, deaths, recovered } = historical;
  console.log(chartData);

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
      <S.AsideMainChart>
        <LineChart
          width={300}
          height={300}
          data={chartData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cases" stroke="#ef3b2c" activeDot={{ r: 8 }} />
        </LineChart>
      </S.AsideMainChart>
      <Search />
    </S.AsideContent>
  );
};

export default Aside;
