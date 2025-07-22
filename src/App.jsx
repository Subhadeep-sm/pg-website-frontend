import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import WhyChooseUs from './components/Whychooseus';
import GoogleReviews from './components/GoogleReviews';

function App() {
  return (
    <>
      <Router>
        <Routes>
      

      <Route path="/" element={
        <>
        <Header/>
        <Hero />                 
      <h1 className="text-4xl text-center mt-10"></h1>
        <About />     
        <WhyChooseUs/>
        <GoogleReviews/>
        </>
      } />

      <Route path="/aboutus" element={<About />} />

      <Route path="/facilities" element={<Facilities />} />

      </Routes>
    </Router>
    </>
  );
}

export default App
