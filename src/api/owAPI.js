const BASE_API = 'https://api.openweathermap.org/data/2.5/air_pollution?';

const getAirIndex = async (lon, lat) => {
  const data = await fetch(`${BASE_API}lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OW_KEY}`);
  return data.json();
};

export default getAirIndex;
