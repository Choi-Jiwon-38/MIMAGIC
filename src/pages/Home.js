import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../atom";
import TopBar from "../components/TopBar";

const Home = () => {
  const navigate = useNavigate();                           // 특정 행동('Try it' 버튼 클릭) 발생 시 url 이동을 위하여 useNavigation() 이용
  const isLoggined = useRecoilValue(userState).isLoggined;  // useRecoilValue()을 이용하여 read-only 형태의 state 값을 추출 -> isLoggined는 bool
  const toKeyword = () => {                                 // 'Try it' 버튼이 클릭하면 발생하는 함수 / 프로젝트의 기능을 로그인한 사용자만 이용할 수 있도록 하기 위함
    isLoggined ? navigate("/keyword") : navigate("/login"); // 삼항연산자를 이용하여 isLoggined가 true이면 '/keyword' 페이지로 false면 '/login' 페이지로 redirect
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
