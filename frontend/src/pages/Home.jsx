import React from "react";
import Navbar from "../components/Navbar";
import homepageImage from "../assets/homepage.jpg";
import "../styles/Home.css";
import HomePageTop from "../components/HomePageTop";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="crop-container relative">
          <img src={homepageImage} alt="" className="crop-image absolute z-0" />
          <div className="dark-overlay"></div>
          <div className="absolute z-10">
            <HomePageTop />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
