import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import config from 'config';
import { formatNumeral } from 'helpers';
import * as S from './styled';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () =>
      await fetch(config.countries)
        .then((r) => r.json())
        .then((data) => {
          setCountries(data);
        });

    getCountries();
  }, []);

  return (
    <S.CountriesListContainer>
      <h3>
        <strong>Country</strong>
        <strong>Total Cases</strong>
      </h3>
      <ul>
        {countries
          .sort((a, b) => b['cases'] - a['cases'])
          .map((c) => (
            <S.ListItem key={uuidv4()}>
              <span>
                <S.CountryFlag src={c.countryInfo.flag} alt={c.country} />
                <strong>{c.country}</strong>
              </span>
              <span>{formatNumeral(c.cases)}</span>
            </S.ListItem>
          ))}
      </ul>
    </S.CountriesListContainer>
  );
};

export default CountriesList;
