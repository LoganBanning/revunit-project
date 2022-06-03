import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './Components/Details/details';
import Posts from './Components/Posts/posts';
import AuthorPosts from './Components/AuthorPosts/authorPosts';

export default (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Posts />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/authorposts/:userId' element={<AuthorPosts />} />
    </Routes>
  </BrowserRouter>
);