import React from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <div>
      <TopBar />
      <div className="flex flex-col px-20 md:px-36 py-[56px] w-screen justify-center h-screen z-1 bg-black overflow-y-hidden ">
        <h2 className="font-semibold text-5xl text-white z-10">
          Unleash
          <br />
          your imagination
        </h2>
        <Link className="bg-white py-2 text-center w-[130px] my-7 rounded-xl text-xl font-extrabold z-10" to="/keyword">
          Try it
        </Link>
        <h1 className="text-white mt-[72px] font-black text-7xl z-10">
          MIMAGIC
        </h1>
      </div>
    </div>
  );
};

export default Home;
