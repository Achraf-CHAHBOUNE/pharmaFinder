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
        <div className="w-2/5 flex flex-col justify-center items-center gap-5 mb-36">
          <h1 className="text-3xl font-mono font-bold text-teal-500 text-center font-4xl uppercase">
            Find the best pharmacy near you
          </h1>
          <h3 className="text-cblue text-2xl text-center text- w-4/5 font-mono font-bold font-4xl uppercase">
             in  just a few clicks
          </h3>
        </div>
        <div className="w-3/5">
          <img src={Image} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
