import React from "react";
import Image from "../../Asset/images/hero-img.png";
import backgroundImage from "../../Asset/images/sheap.png"; // Import the background image

const Hero = () => {
  return (
    <div>
      <div
        className="flex justify-center h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Use the imported image
      >
        <div className="w-1/2"></div>
        <div className="w-1/2">
          <img src={Image} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
