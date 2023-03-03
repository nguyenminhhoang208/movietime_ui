import React from "react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="w-full flex items-center flex-col ">
      <Header />
      <div className="w-[90%]">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
