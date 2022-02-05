import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePageContainer from './pages/HomePage/HomePageContainer';
import CountryPageContainer from './pages/CountryPage/CountryPageContainer';

const createRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePageContainer />} />
    <Route path="/country">
      <Route path="/country/:countryId" element={<CountryPageContainer />} />
    </Route>
  </Routes>
);

export default createRoutes;
