import React, { useState, useRef } from 'react';
import axios from 'axios';
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
import { getTheLastDay } from 'helpers';
import * as S from './styled';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [country, setCountry] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [chartData, setChartData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const { historicalByCountry } = config;
  const inputEl = useRef(null);

  const getHistoricalByCountry = async value => {  
    try {
      const response = await axios.get(`${historicalByCountry}${value}`);
      const { data, status } = response;
      if (status === 200) {
        setCountry(data);
        setErrorMessage('');
        setHasError(false);
        setChartData([
          ...Object.keys(data.timeline.cases).map((item, index) => {
            return {
              name: item,
              cases: Object.values(data.timeline.cases)[index],
              deaths: Object.values(data.timeline.deaths)[index],
              recovered: Object.values(data.timeline.recovered)[index],
            };
          })
        ])
      }
    } catch (e) {
      if (e.response) {
        setHasError(true);
        setErrorMessage(e.response.data.message);
      }
    }
  };

  const handleChange = (e) => {
    setErrorMessage('');
    setHasError(false);
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getHistoricalByCountry(inputValue);
    setInputValue('');
    inputEl.current.focus();
  }

  return (
    <S.SearchContainer>
      <h2>Cases by Country:</h2>
      <S.SearchForm noValidate>
        <S.SearchInput
          ref={inputEl}
          onChange={handleChange}
          type="text"
          value={inputValue}
          placeholder="Search for a Country..."
        />
        <S.SearchSubmit type="submit" onClick={handleSubmit}>
          <box-icon name="search-alt" color="#4c4c4c" />
        </S.SearchSubmit>
      </S.SearchForm>
      {hasError && <p className="alert-error">{errorMessage}</p>}
      {!hasError && country.timeline && (
        <S.SearchResult>
          <h3>
            {country.country && <strong>Country: {country.country}</strong>}
          </h3>
          {country.timeline && (
            <div className="timeline">
              <p className="total-cases">
                Total Cases:{' '}
                {country.timeline && country.timeline.cases[getTheLastDay()]}
              </p>
              <p className="active-cases">
                Active Cases:{' '}
                {country.timeline &&
                  country.timeline.cases[getTheLastDay()] -
                    country.timeline.deaths[getTheLastDay()] -
                    country.timeline.recovered[getTheLastDay()]}
              </p>
              <p className="deaths">
                Deaths:{' '}
                {country.timeline && country.timeline.deaths[getTheLastDay()]}
              </p>
              <p className="recovered">
                Recovered:{' '}
                {country.timeline &&
                  country.timeline.recovered[getTheLastDay()]}
              </p>
            </div>
          )}
          <S.SearchResultChartContainer>
            <ResponsiveContainer>
              <AreaChart
                width={300}
                height={300}
                data={chartData}
                margin={{
                  top: 5, right: 5, left: 5, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="cases" stroke="#ef3b2c" fill="#ef3b2c" activeDot={{ r: 8 }} />
                <Area type="monotone" dataKey="deaths" stroke="#474747" fill="#474747" />
                <Area type="monotone" dataKey="recovered" stroke="#198700" fill="#198700" />
              </AreaChart>
            </ResponsiveContainer>
          </S.SearchResultChartContainer>
        </S.SearchResult>
      )}
    </S.SearchContainer>
  );
};

export default Search;
