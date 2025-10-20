import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <div className="py-4">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <div className="py-6">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;
