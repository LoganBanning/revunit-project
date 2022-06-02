import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './Components/Details/details';
import Posts from './Components/Posts/posts';

export default (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Posts />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  </BrowserRouter>
);