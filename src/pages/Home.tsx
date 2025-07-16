import React from "react";
import coffy from "../assets/Coffy_Text.svg";

const Home: React.FC = () => {
  return (
    <div className="relative flex justify-end items-center min-h-screen w-full">
      <div className="w-[40%]">
        <div className="text-[#000] text-[2.375rem] font-[400] leading-normal">
          Website is Under
        </div>
        <div className="text-[#8C181B] text-[2.875rem] font-[700] leading-normal">
          MAINTENANCE
        </div>
        <div className="text-[#000] text-[0.9375rem] not-italic font-normal leading-normal">
          Our website is currently undergoing scheduled
          <br /> maintenance. We should be back shortly.
          <br />
          Thank you for your patience.
        </div>
      </div>
      <img className="absolute bottom-0 left-0 w-full" src={coffy} />
    </div>
  );
};

export default Home;
