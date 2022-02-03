import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import createRoutes from '../routes';
import InfoComponent from './InfoComponent';
import { initState } from '../state/air/airSlice';
import { data } from '../utils/filter';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initState(data));
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
