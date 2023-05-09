import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../atom";
import TopBar from "../components/TopBar";

const Home = () => {
  const navigate = useNavigate();
  const isLoggined = useRecoilValue(userState).isLoggined;
  const toKeyword = () => {
    isLoggined ? navigate("/keyword") : navigate("/login");
  };

  return (
    <div>
      <TopBar />
      <div className="flex flex-col px-20 md:px-36 py-[56px] w-screen justify-center h-screen z-1 bg-black overflow-y-hidden ">
        <h2 className="font-semibold text-5xl text-white z-10">
          Unleash
          <br />
          your imagination
        </h2>
        <div
          className="bg-white py-2 text-center w-[130px] my-7 rounded-xl text-xl font-extrabold z-10 cursor-pointer"
          onClick={() => {
            toKeyword();
          }}
        >
          Try it
        </div>
        <h1 className="text-white mt-[72px] font-black text-7xl z-10">
          MIMAGIC
        </h1>
      </div>
    </div>
  );
};

export default Home;
