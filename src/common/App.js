import React from 'react';
import Header from './Header';
import createRoutes from '../routes';
import InfoComponent from './InfoComponent';

function App() {
  return (
    <main id="App">
      <Header />
      {createRoutes()}
      <InfoComponent />
    </main>
  );
}

export default App;
