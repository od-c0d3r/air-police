import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import createRoutes from '../routes';
import getAirIndex from '../api/owAPI';
import { data } from '../utils/filter';
import InfoComponent from './InfoComponent';
import { fetchCountryData } from '../state/air/airSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    data.map(async (count) => {
      const response = await getAirIndex(count.longitude, count.latitude);
      dispatch(fetchCountryData({ id: count.id, name: count.country, data: response.list[0] }));
    });
  }, []);

  return (
    <main id="App">
      <Header />
      {createRoutes()}
      <InfoComponent />
    </main>
  );
}

export default App;
