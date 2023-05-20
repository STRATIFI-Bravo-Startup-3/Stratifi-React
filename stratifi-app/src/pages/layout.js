import React from "react";
import "animate.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-pink-gradient">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
