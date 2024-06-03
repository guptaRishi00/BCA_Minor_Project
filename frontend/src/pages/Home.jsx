import React from "react";
import Navbar from "../components/Navbar";
import homepageImage from "../assets/homepage.jpg";
import "../styles/Home.css";
import HomePageTop from "../components/HomePageTop";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="crop-container relative">
          <img src={homepageImage} alt="" className="crop-image absolute z-0" />
          <div className="dark-overlay"></div>
          <div className="absolute">
            <HomePageTop />
          </div>
        </div>
        <HeroSection />
      </div>

      <Footer />
    </>
  );
}

export default Home;
