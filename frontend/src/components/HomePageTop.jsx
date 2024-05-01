import React from "react";
import HeroCard from "./HeroCard";

function HomePageTop() {
  return (
    <div className="flex p-10 items-center justify-center">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-8xl text-white">The future of health</h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
          laboriosam. Iste, quas. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Explicabo, doloremque perferendis. Optio itaque
          minima nobis nesciunt assumenda non commodi velit. Error itaque ipsa
          quis.
        </p>
        <div className=" flex items-center  gap-3">
          <button className="py-2 px-6 bg-white rounded-md">apple</button>
          <button className="py-2 px-6 bg-white rounded-md">playstore </button>
        </div>
      </div>
      <div className="">
        <HeroCard />
      </div>
    </div>
  );
}

export default HomePageTop;
