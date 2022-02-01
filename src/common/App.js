import React from 'react';
import Header from './Header';
import createRoutes from '../routes';

function App() {
  return (
    <main id="App">
      <Header />
      {createRoutes()}
    </main>
  );
}

export default App;
