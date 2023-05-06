import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import axios from "axios";

const Loading = ({ text }) => {
  const { state } = useLocation();
  const [resultConcept, setResultConcept] = useState("");
  const [resultName, setResultName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (state.question1 !== "" && state.question2 !== "") {
      let url = "http://localhost:3001/";

      let message = state.question1;
      axios
        .post(url, { message })
        .then(function (res) {
          setResultConcept(res.data.message); // 서비스 아이디어 추천 결과 저장
          message = state.question2;
          axios
            .post(url, { message })
            .then(function (res) {
              setResultName(res.data.message); // 서비스 이름 추천 결과 저장
              console.log(resultName, resultConcept);
              navigate("/result", { state: { resultConcept, resultName } });
            })
            .catch(function () {
              alert("검색 도중 예상치 못한 문제가 발생하였습니다.");
              navigate("/");
            });
        })
        .catch(function () {
          alert("검색 도중 예상치 못한 문제가 발생하였습니다.");
          navigate("/");
        });
    }
  }, [navigate, resultConcept, resultName, state.question1, state.question2]);

  return (
    <>
      <TopBar />
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-black">
        <div className="relative w-[120px] h-[120px]">
          <div className="absolute inset-0 rounded-full bg-blue-500 animate-[loaderAnimate_2s_ease-in-out_infinite]" />
          <div
            className="absolute inset-0 rounded-full bg-white bg-opacity-50 backdrop-blur-md animate-[loaderAnimate_2s_ease-in-out_infinite]"
            style={{ animationDelay: "-1s" }}
          ></div>
        </div>
        <p className="mt-[52px] font-extrabold text-[24px] text-white">
          {state ? "Loading for Result . . ." : { text }}
        </p>
      </div>
    </>
  );
};

export default Loading;
