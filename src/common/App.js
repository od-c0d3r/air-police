import React from 'react';
import createRoutes from '../routes';
import Header from './Header';

function App() {
  return (
    <main id="App">
      #App
      <Header />
      {createRoutes()}
    </main>
  );
}

export default App;
