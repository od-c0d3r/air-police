const BASE_API = 'http://api.openweathermap.org/data/2.5/air_pollution?';

async function getAirIndex(lon, lat) {
  const data = await fetch(`${BASE_API}lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OW_KEY}`);
  const response = await data.json();
  return response;
}

export default getAirIndex;
