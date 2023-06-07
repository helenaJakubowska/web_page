import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import AboutMe from '../Scene.js/AboutMe';
import Home from '../Scene.js/Home';
import Courses from '../Scene.js/Сourses';
import Reviews from '../Scene.js/Reviews';

import Contact from '../Scene.js/Contact';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="aboutMe" element={<AboutMe />} />
        <Route path="courses" exact element={<Courses />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contacts" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
