import React, { useEffect, useRef } from "react";
import bird from "../assets/bird.png";
import { MouseParallax } from "react-just-parallax";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const parallaxRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden relative h-screen bg-hero-background bg-cover bg-center flex flex-col justify-center ">
      <MouseParallax
        isAbsolutelyPositioned={true}
        shouldPause={true}
        shouldResetPosition={true}
      >
        <img
          src={bird}
          alt="Bird 1"
          className="absolute top-16 left-16 w-12 h-12"
        />
        <img
          src={bird}
          alt="Bird 1"
          className="absolute top-[130px] left-28 w-12 h-12"
        />
        <img
          src={bird}
          alt="Bird 1"
          className="absolute top-[140px] right-[170px] w-12 h-12"
        />
        <img
          src={bird}
          alt="Bird 1"
          className="absolute top-1/4 left-18 w-12 h-12"
        />
        <img
          src={bird}
          alt="Bird 2"
          className="absolute top-16 right-16 w-12 h-12"
        />
        <img
          src={bird}
          alt="Bird 3"
          className="absolute top-28 left-1/3 w-12 h-12"
        />
        <img
          src={bird}
          alt="Bird 4"
          className="absolute top-16 right-1/3 w-12 h-12"
        />
      </MouseParallax>
      <div className="relative inset-0  bg-black bg-opacity-50 flex flex-col items-center">
        <h1 className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide transition-transform duration-300 hover:scale-110">
          <span className=" bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text ">
            {" "}
            ExploreEase
          </span>
        </h1>
        <p className="mt-4 inline-block px-4 py-2 rounded text-slate-300 ">
          Your ultimate travel companion!
        </p>
        <button
          onClick={() => navigate("/explore")}
          className="bg-slate-200 text-orange-400 font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:bg-gray-200 hover:scale-105 hover:shadow-xl mb-2"
        >
          Lets Explore
        </button>{" "}
      </div>
      {/* <div className="relative text-red-600 text-center">
        <h1 className="text-4xl font-bold">ExploreEase</h1>
      </div> */}
    </div>
    // <div style={{ width: "100%", height: "100vh" }} ref={parallaxRef}>
    //   <h1 className="text-black text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
    //     Explore the World
    //     <span className=" bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
    //       {" "}
    //       with Ease
    //     </span>
    //   </h1>
    // </div>
  );
};

export default Landing;
