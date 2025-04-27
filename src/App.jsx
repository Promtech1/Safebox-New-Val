// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout   from './components/Layout';
import Home     from './pages/Home';
import Impact   from './pages/Impact';
import BlogPage from './pages/BlogPage';
import Education from './pages/Education';
import About from './pages/About';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      {/* Everything inside Layout gets Navbar + Footer */}
      <Layout>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Impact page */}
          <Route path="/impact" element={<Impact />} />

          {/* Blog detail pages */}
          <Route path="/blog/:slug" element={<BlogPage />} />

          <Route path="/education" element={<Education />} />

          <Route path="/About" element={<About />} /> 

          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
