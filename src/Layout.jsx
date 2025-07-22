// src/Layout.jsx
import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* <Header /> */}
      <Outlet /> {/* This shows App, About, etc. */}
    </div>
  );
};

export default Layout;
