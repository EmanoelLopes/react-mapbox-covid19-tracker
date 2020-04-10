import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import useSWR from 'swr';
import config from 'config';

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
    <div className="mapContainer">
      <div className="mapBox" ref={mapboxElRef} />
    </div>
  );
};

export default MapContainer;