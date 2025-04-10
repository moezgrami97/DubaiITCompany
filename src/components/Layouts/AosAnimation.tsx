"use client";

import React from "react";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
  
const AosAnimation: React.FC = () => {
 
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 300,
      once: false,
      offset: 10,
    });
    
    
  }, []);

  return (
    <div></div>
  );
};

export default AosAnimation;
