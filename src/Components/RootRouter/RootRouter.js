import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import AboutMe from '../Scene.js/AboutMe';
import Home from '../Scene.js/Home';
import Courses from '../Scene.js/Courses/Сourses';
import Course from '../Scene.js/Courses/Course/Course';
import Contact from '../Scene.js/Contact';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="aboutMe" element={<AboutMe />} />
        <Route path="courses" exact element={<Courses />} />
        <Route path="courses/:title" element={<Course />} />
        <Route path="contacts" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
