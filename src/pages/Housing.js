import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Housingcontent from "../components/Housingcontent";

const Housing = () => {
  return (
    <div className="page-position">
      <Navigation />
      <Housingcontent />
      <Footer />
    </div>
  );
};

export default Housing;
