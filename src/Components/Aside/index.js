import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import config from 'config';
import Search from 'Components/Search';
import * as S from './styled';
import { getTheLastDay } from 'helpers';

const Aside = () => {
  const [historical, setHistorical] = useState({});
  const [chartData, setChartData] = useState([]);
  const { historicalAll } = config;

  useEffect(() => {
    const getHistorical = async () =>
      await fetch(historicalAll)
        .then((r) => r.json())
        .then((data) => {
          setHistorical(data);
          setChartData([
            ...Object.keys(data.cases).map((item, index) => {
              return {
                name: item,
                cases: Object.values(data.cases)[index],
                deaths: Object.values(data.deaths)[index],
                recovered: Object.values(data.recovered)[index],
              };
            })
          ]);
        });

    getHistorical();
  }, [historicalAll]);

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
        <S.AsideChartContainer>
          <ResponsiveContainer>
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="cases" stroke="#ef3b2c" fill="#ef3b2c" activeDot={{ r: 8 }} />
              <Area type="monotone" dataKey="deaths" stroke="#474747" fill="#474747" />
              <Area type="monotone" dataKey="recovered" stroke="#198700" fill="#198700" />
            </AreaChart>
          </ResponsiveContainer>
        </S.AsideChartContainer>
      </S.AsideContainer>
      <Search />
    </S.AsideContent>
  );
};

export default Aside;
