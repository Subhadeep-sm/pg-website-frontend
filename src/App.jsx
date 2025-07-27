import React from 'react';
import { Routes, Route } from "react-router-dom";
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
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import AdminDashboard from './components/AdminDashboard';
import AddTenant from './components/AddTenant';
import AllTenants from './components/AllTenants';
import BuildingWiseData from './components/BuildingWiseData';
import ManageBuildings from './components/ManageBuildings';
import ChangeRent from './components/ChangeRent';
import AuthenticatedAdmin from './components/AuthenticatedAdmin';
import ProtectedRoute from './components/ProtectedRoute'; // <-- Add this line

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<><Header /><Hero /><About /><WhyChooseUs /><GoogleReviews /><Map /><Footer /></>} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/contact" element={<><Header /><Contact /><Map /><Footer /></>} />
      <Route path="/BoysPg" element={<><Header /><BoysPg /><Footer /></>} />
      <Route path="/GirlsPg" element={<><Header /><GirlsPg /><Footer /></>} />
      <Route path="/forgot-password" element={<><Header /><ForgotPassword /></>} />
      <Route path="/reset-password" element={<><Header /><ResetPassword /></>} />
      <Route path="/admin" element={<><Header /><AuthenticatedAdmin /><Footer /></>} />

      {/* Admin Auth Route */}
      <Route
        path="/admin"
        element={<><Header /><AuthenticatedAdmin /><Footer /></>}
      />

      {/* Protected Admin Routes */}
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-tenant"
        element={
          <ProtectedRoute>
            <><Header /><AddTenant /><Footer /></>
          </ProtectedRoute>
        }
      />
      <Route
        path="/all-tenants"
        element={
          <ProtectedRoute>
            <><Header /><AllTenants /><Footer /></>
          </ProtectedRoute>
        }
      />
      <Route
        path="/building-data"
        element={
          <ProtectedRoute>
            <><Header /><BuildingWiseData /><Footer /></>
          </ProtectedRoute>
        }
      />
      <Route
        path="/manage-buildings"
        element={
          <ProtectedRoute>
            <><Header /><ManageBuildings /><Footer /></>
          </ProtectedRoute>
        }
      />
      <Route
        path="/change-rent"
        element={
          <ProtectedRoute>
            <><Header /><ChangeRent /><Footer /></>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
