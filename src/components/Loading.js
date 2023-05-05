import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TopBar from "./TopBar";

const Loading = ({ text }) => {
  const { state } = useLocation();
  const [resultConcept, setResultConcept] = useState("");
  const [resultName, setResultName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (state !== "") {
      var q1 = state.question1;
      var q2 = state.question2;
      console.log(q1, q2);
      
      fetch("http://localhost:3001/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({q1}),
      })
        .then((res) => res.json())
        .then((data) => setResultConcept(data.message));

      fetch("http://localhost:3001/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({q2}),
      })
        .then((res) => res.json())
        .then((data) => setResultName(data.message));
    }
  }, [navigate, resultConcept, resultName, state]);

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
