import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import config from 'config';
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
      <ul>
        {countries.map((c) => (
         <li key={uuidv4()}>
            <span>{c.country}</span>
            <span>{c.cases}</span>
          </li>
        ))}
      </ul>
    </S.CountriesListContainer>
  )
};

export default CountriesList;
