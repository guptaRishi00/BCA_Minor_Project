import React from "react";
import FeatureCard from "./FeatureCard";
import { LuBaby } from "react-icons/lu";
import { GiDoctorFace } from "react-icons/gi";
import { BiSolidInjection } from "react-icons/bi";

function HeroSection() {
  const featureCardData = [
    {
      id: 1,
      title: "Diagnostic Examination",
      description: "Depending on the specific health concern being evaluated",
      icon: BiSolidInjection,
    },
    {
      id: 2,
      title: "Children's Ophthalmology",
      description: "Depending on the specific health concern being evaluated",
      icon: LuBaby,
    },
    {
      id: 3,
      title: "Consultant",
      description: "Depending on the specific health concern being evaluated",
      icon: GiDoctorFace,
    },
  ];
  return (
    <div className="flex flex-col py-20 px-28 gap-10">
      <div className="flex items-center justify-between ">
        <div className="">
          <h1 className="text-4xl font-bold">Our Features</h1>
          <p className="text-gray-600">
            We study the latest scientific achievements implementing them at
            work
          </p>
        </div>
        <button className="bg-blue-500 px-5 py-4 rounded-full text-white">
          Meet Our Experts
        </button>
      </div>
      <div className="flex items-center justify-center gap-10">
        {featureCardData?.map(({ id, title, description, icon }) => (
          <FeatureCard
            key={id}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
