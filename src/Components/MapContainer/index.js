import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import useSWR from 'swr';
import config from 'config';
import * as S from './styled';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_GL_TOKEN;

const MapContainer = () => {
  const mapboxElRef = useRef(null);
  const { jhucsse, mapConfig, setMap } = config;

  const getCountries = (url) =>
    fetch(url)
      .then((r) => r.json())
      .then((data) => setMap(data));

  const { data: countries } = useSWR(jhucsse, getCountries);

  useEffect(() => {
    if (countries) mapConfig(countries, mapboxElRef);
  }, [countries, mapConfig]);

  return (
    <S.MapContainer>
      <S.MapBox ref={mapboxElRef} />
    </S.MapContainer>
  );
};

export default MapContainer;
