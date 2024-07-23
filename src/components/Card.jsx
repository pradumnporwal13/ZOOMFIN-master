// Card.js

import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ image, loanType, description, navigateTo, knowMore }) {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    window.open(navigateTo, "_parent");
  };

  const handleKnowMore = () => {
    navigate(knowMore);
  };

  return (
    <>
      <div className="w-full lg:w-[340px] bg-white rounded-lg shadow-md overflow-hidden relative hover:scale-105 duration-150">
        <img className="w-full bg-gray-400 h-[260px]" src={image} alt="" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{loanType}</h3>
          <ul className="text-gray-600">
            <li>{description}</li>
          </ul>
          <div className="h-14"></div>
          <div className="flex justify-left gap-2 absolute bottom-4 left-0 right-0 px-4">
            <button
              onClick={handleApplyNow}
              className="bg-red-600 hover:bg-white hover:text-red-500 border hover:border-red-500 duration-500 text-white px-4 py-2 rounded-md"
            >
              Apply Now
            </button>
            <button
              onClick={handleKnowMore}
              className="bg-gray-100 hover:bg-gray-300 duration-200 text-red-600 px-4 py-2 rounded-md"
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

