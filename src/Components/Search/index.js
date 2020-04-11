import React, { useState } from 'react';
import axios from 'axios';
import config from 'config';
import { getTheLastDay } from 'helpers';
import * as S from './styled';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [country, setCountry] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [hasError, setHasError] = useState(false);
  const { historicalByCountry } = config;

  const getHistoricalByCountry = async value => {  
    try {
      const response = await axios.get(`${historicalByCountry}${value}`);
      if (response.status === 200) {
        setCountry(response.data);
        setErrorMessage('');
        setHasError(false);
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
  }

  return (
    <S.SearchContainer>
      <h2>Filter by Country:</h2>
      <S.SearchForm noValidate>
        <S.SearchInput
          onChange={handleChange}
          type="text"
          placeholder="SEARCH FOR A COUNTRY"
        />
        <S.SearchSubmit type="submit" onClick={handleSubmit}>
          <box-icon name="search-alt" />
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
              <p>
                Total Cases:{' '}
                {country.timeline && country.timeline.cases[getTheLastDay()]}
              </p>
              <p>
                Active Cases:{' '}
                {country.timeline &&
                  country.timeline.cases[getTheLastDay()] -
                    country.timeline.deaths[getTheLastDay()] -
                    country.timeline.recovered[getTheLastDay()]}
              </p>
              <p>
                Deaths:{' '}
                {country.timeline && country.timeline.deaths[getTheLastDay()]}
              </p>
              <p>
                Recovered:{' '}
                {country.timeline &&
                  country.timeline.recovered[getTheLastDay()]}
              </p>
            </div>
          )}
        </S.SearchResult>
      )}
    </S.SearchContainer>
  );
};

export default Search;
