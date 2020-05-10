import React, { useState, useEffect, Suspense, lazy } from 'react';
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
import Wait from 'Components/Wait';
import * as S from './styled';
import { getTheLastDay, formatNumeral } from 'helpers';

const CountriesList = lazy(() => import('Components/CountriesList'));

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
            ...Object.keys(data.cases).map((item, index) => ({
              name: item,
              cases: Object.values(data.cases)[index],
              deaths: Object.values(data.deaths)[index],
              recovered: Object.values(data.recovered)[index],
            })),
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
          <strong> {cases && formatNumeral(cases[getTheLastDay()])}</strong>
        </h2>
        <p className="active-cases">
          Active Cases:{' '}
          <strong>
            {cases &&
              formatNumeral(
                cases[getTheLastDay()] -
                  deaths[getTheLastDay()] -
                  recovered[getTheLastDay()]
              )}
          </strong>
        </p>
        <p className="deaths">
          Deaths:
          <strong> {deaths && formatNumeral(deaths[getTheLastDay()])}</strong>
        </p>
        <p className="recovered">
          Recovereds:{' '}
          <strong>
            {recovered && formatNumeral(recovered[getTheLastDay()])}
          </strong>
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
              <Area
                type="monotone"
                dataKey="cases"
                stroke="#ef3b2c"
                fill="#ef3b2c"
                activeDot={{ r: 8 }}
              />
              <Area
                type="monotone"
                dataKey="deaths"
                stroke="#474747"
                fill="#474747"
              />
              <Area
                type="monotone"
                dataKey="recovered"
                stroke="#198700"
                fill="#198700"
              />
            </AreaChart>
          </ResponsiveContainer>
        </S.AsideChartContainer>
      </S.AsideContainer>
      <Search />
      <Suspense fallback={<Wait />}>
        <CountriesList />
      </Suspense>
    </S.AsideContent>
  );
};

export default Aside;
