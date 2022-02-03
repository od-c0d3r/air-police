import React from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import createRoutes from '../routes';
import InfoComponent from './InfoComponent';
import { fetchCountryData } from '../state/air/airSlice';
import { MOST_20_AF } from '../utils/filter';
import getAirIndex from '../api/owAPI';

function App() {
  const dispatch = useDispatch();

  MOST_20_AF.forEach(
    (count) => {
      getAirIndex(count.longitude, count.latitude).then((data) => {
        dispatch(fetchCountryData({ id: count.id, name: count.country, data: data.list[0] }));
      });
    },
  );

  return (
    <main id="App">
      <Header />
      {createRoutes()}
      <InfoComponent />
    </main>
  );
}

export default App;
