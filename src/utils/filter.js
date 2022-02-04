export const data = [
  {
    id: 0,
    country: 'Nigeria',
    latitude: 10,
    longitude: 8,
  },
  {
    id: 1,
    country: 'Ethiopia',
    latitude: 8,
    longitude: 38,
  },
  {
    id: 2,
    country: 'Egypt',
    latitude: 27,
    longitude: 30,
  },
  // {
  //   id: 3,
  //   country: 'DR Congo',
  //   latitude: -1,
  //   longitude: 15,
  // }, {
  //   id: 4,
  //   country: 'Tanzania, United Republic of',
  //   latitude: -6,
  //   longitude: 35,
  // }, {
  //   id: 5,
  //   country: 'South Africa',
  //   latitude: -29,
  //   longitude: 24,
  // }, {
  //   id: 6,
  //   country: 'Kenya',
  //   latitude: 1,
  //   longitude: 38,
  // }, {
  //   id: 7,
  //   country: 'Uganda',
  //   latitude: 1,
  //   longitude: 32,
  // },
  // {
  //   id: 8,
  //   country: 'Algeria',
  //   latitude: 28,
  //   longitude: 3,
  // }, {
  //   id: 9,
  //   country: 'Sudan',
  //   latitude: 15,
  //   longitude: 30,
  // }, {
  //   id: 10,
  //   country: 'Morocco',
  //   latitude: 32,
  //   longitude: -5,
  // }, {
  //   id: 11,
  //   country: 'Angola',
  //   numeric: 24,
  //   latitude: -12.5,
  //   longitude: 18.5,
  // }, {
  //   id: 12,
  //   country: 'Mozambique',
  //   latitude: -18.25,
  //   longitude: 35,
  // }, {
  //   id: 13,
  //   country: 'Ghana',
  //   latitude: 8,
  //   longitude: -2,
  // }, {
  //   id: 14,
  //   country: 'Madagascar',
  //   latitude: -20,
  //   longitude: 47,
  // },
  // {
  //   id: 15,
  //   country: 'Cameroon',
  //   latitude: 6,
  //   longitude: 12,
  // }, {
  //   id: 16,
  //   country: "Côte d'Ivoire",
  //   latitude: 8,
  //   longitude: -5,
  // }, {
  //   id: 17,
  //   country: 'Niger',
  //   latitude: 16,
  //   longitude: 8,
  // }, {
  //   id: 18,
  //   country: 'Burkina Faso',
  //   latitude: 13,
  //   longitude: -2,
  // }, {
  //   id: 19,
  //   country: 'Mali',
  //   latitude: 17,
  //   longitude: -4,
  // },
];

export function getCountry(data, id) {
  return data.find(
    (country) => country.id === id,
  );
}
