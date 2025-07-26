import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import WhyChooseUs from './components/WhyChooseUs';
import GoogleReviews from './components/GoogleReviews';
import Footer from './components/Footer';
import Map from './components/Map';
import Contact from './components/Contact';
import BoysPg from './components/BoysPg';
import GirlsPg from './components/GirlsPg';
import Admin from './components/Admin';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import AdminDashboard from './components/AdminDashboard';
import AddTenant from './components/AddTenant';
import AllTenants from './components/AllTenants';
import BuildingWiseData from './components/BuildingWiseData';
import ManageBuildings from './components/ManageBuildings';
import ChangeRent from './components/ChangeRent';
import AuthenticatedAdmin from './components/AuthenticatedAdmin';
function App() {
  return (
    <>
      <Router>
        <Routes>


          <Route path="/" element={
            <>
              <Header />
              <Hero />
              {/* <h1 className="text-4xl text-center mt-10"></h1> */}
              <About />
              <WhyChooseUs />
              <GoogleReviews />
              <Map />
              <Footer />
            </>
          } />

          <Route path="/aboutus" element={<About />} />

          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contact" element={
            <>
              <Header />
              <Contact />
              <Map />
              <Footer />
            </>
          } />

          <Route path="/BoysPg" element={
            <>

              <Header />
              <BoysPg />
              <Footer />

            </>


          } />
          <Route path="/GirlsPg" element={
            <>

              <Header />
              <GirlsPg />
              <Footer />

            </>


          } />
          <Route path="/admin" element={
            <>
              <Header />
              <Login/>
            </>
          } />
          
          <Route path="/admin-login" element={
            <>
              <Header />
              <Login />
            </>
          } />
          
          <Route path="/forgot-password" element={
            <>
              <Header />
              <ForgotPassword />
            </>
          } />
          <Route path="/reset-password" element={
            <>
              <Header />
              <ResetPassword />
            </>
          } />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/add-tenant" element={
            <>
            <Header />
            <AddTenant />
            <Footer />
            </>
            } />
          <Route path="/all-tenants" element={
            <>
            <Header />
            <AllTenants />
            <Footer />
            </>
            } />
          <Route path="/building-data" element={
            <>
            <Header />
            <BuildingWiseData />
            <Footer />
            </>
            } />
            <Route path="/manage-buildings" element={
            <>
            <Header />
            <ManageBuildings />
            <Footer />
            </>
            } />
          <Route path="/change-rent" element={
            <>
            <Header />
            <ChangeRent />
            <Footer />
            </>
          } />

          <Route path="/authenticated-admin" element={<AuthenticatedAdmin />} />





        </Routes>
      </Router>
    </>
  );
}

export default App
