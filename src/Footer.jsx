import React from "react";
import "./App.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <nav className="footer">
      <h3>Copyright ©{year}</h3>
    </nav>
  );
};

export default Footer;
