import { mapConfig, setMap } from 'config/mapConfig';
import { mapLayer } from 'config/mapLayer';

// COVID-19 API https://docs.corona.lmao-xd.wtf/version-2
const BASE_URL = 'https://corona.lmao.ninja/v2';
const ENDPOINTS = {
  jhucsse: `${BASE_URL}/jhucsse`,
  historicalAll: `${BASE_URL}/historical/all`,
  countries: `${BASE_URL}/countries`,
  historicalByCountry: `${BASE_URL}/historical/`,
};

export default {
  ...ENDPOINTS,
  mapConfig,
  mapLayer,
  setMap,
};
