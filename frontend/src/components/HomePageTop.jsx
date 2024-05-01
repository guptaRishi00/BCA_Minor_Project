import React from "react";
import HeroCard from "./HeroCard";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

function HomePageTop() {
  return (
    <div className="flex items-center mt-32 px-28 gap-5">
      <div className="flex flex-col gap-4">
        <h1 className="text-8xl text-white">The future of health</h1>
        <p className="text-gray-300 pr-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
          laboriosam. Iste, quas. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Explicabo, doloremque perferendis. Optio itaque
          minima nobis nesciunt assumenda non commodi velit. Error itaque ipsa
          quis.
        </p>
        <div className=" flex items-center gap-3">
          <button className="py-2 px-6 bg-white rounded-md flex items-center gap-1">
            <IoLogoGooglePlaystore />
            Play Store
          </button>
          <button className="py-2 px-6 bg-white rounded-md flex items-center gap-1">
            <FaApple />
            App Store
          </button>
        </div>
      </div>
      <div className="">
        <HeroCard />
      </div>
    </div>
  );
}

export default HomePageTop;
