import React from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import Header from './Header';
import createRoutes from '../routes';

function App() {
  return (
    <main id="App">
      <Header />
      {createRoutes()}
      <HiOutlineExclamationCircle id="info" />
    </main>
  );
}

export default App;
