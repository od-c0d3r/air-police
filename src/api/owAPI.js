const BASE_API = 'https://api.openweathermap.org/data/2.5/air_pollution?';

const getAirIndex = async (lon, lat) => {
  const data = await fetch(`${BASE_API}lat=${lat}&lon=${lon}&appid=45997ba80da98040a7b69f317ccc26ab`);
  return data.json();
};

export default getAirIndex;
