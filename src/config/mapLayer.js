export const mapLayer = {
  id: 'circles',
  source: 'points',
  type: 'circle',
  paint: {
    'circle-opacity': 0.65,
    'circle-stroke-width': [
      'interpolate',
      ['linear'],
      ['get', 'cases'],
      1,
      1,
      100000,
      1.75,
    ],
    'circle-radius': [
      'interpolate',
      ['linear'],
      ['get', 'cases'],
      1,
      4,
      1000,
      8,
      4000,
      10,
      8000,
      14,
      12000,
      18,
      100000,
      40,
    ],
    'circle-color': [
      'interpolate',
      ['linear'],
      ['get', 'cases'],
      1,
      '#ffffb2',
      5000,
      '#fed976',
      10000,
      '#feb24c',
      25000,
      '#fd8d3c',
      50000,
      '#fc4e2a',
      75000,
      '#e31a1c',
      100000,
      '#b10026',
    ],
  },
};
