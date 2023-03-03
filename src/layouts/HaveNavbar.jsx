import React from "react";
import Header from "~/components/Header";
import Navbar from "~/layouts/Navbar";
import Footer from "~/layouts/Footer";

const HaveNavbar = ({ children }) => {
  return (
    <div className="w-full flex items-center flex-col ">
      <Header />
      <div className="w-[90%]">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default HaveNavbar;
