import React, { useState } from 'react';
import axios from 'axios';
import config from 'config';
import { getTheLastDay } from 'helpers';

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
    <div className="search">
      <h2>Search for Country:</h2>
      <form noValidate>
        <input
          onChange={handleChange}
          type="text"
          placeholder="SEARCH FOR A COUNTRY"
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
      {hasError && <p className="alert-error">{errorMessage}</p>}
      {!hasError && (
        <div className="search-result">
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
                Deaths:{' '}
                {country.timeline && country.timeline.deaths[getTheLastDay()]}
              </p>
              <p>
                Recovered:{' '}
                {country.timeline &&
                  country.timeline.recovered[getTheLastDay()]}
              </p>
              <p>
                Active Cases:{' '}
                {country.timeline &&
                  country.timeline.cases[getTheLastDay()] -
                    country.timeline.deaths[getTheLastDay()] -
                    country.timeline.recovered[getTheLastDay()]}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
