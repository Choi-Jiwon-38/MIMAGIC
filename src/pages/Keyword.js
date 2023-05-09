import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../atom";
import TopBar from "../components/TopBar";

const Keyword = () => {
  const [message, setMessage] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");

  useEffect(() => {
    setQuestion1(
      "Please come up with one web service ideas using the keyword " + message
    );
    setQuestion2(
      "Please make 5 names of web services except for simply connecting words using the keyword " + message
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  const navigate = useNavigate();
  const isLoggined = useRecoilValue(userState).isLoggined;
  // login 상태가 아닌 경우에 Keyword 페이지로 접근하면 Login으로 redirect
  useEffect(() => {
    if (!isLoggined) {
      navigate("/login");
    }
  }, [navigate, isLoggined]);

  return (
    <>
      <TopBar />
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-black">
        <div
          className="flex flex-col justify-between items-center w-[800px] h-[600px] px-[50px] pt-[48px] pb-[32px] rounded-2xl"
          style={{
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(100% 64.41% at 4.48% 3.92%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
            boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(5px)",
          }}
        >
          <h1 className="text-[32px] font-extrabold text-white">
            Imagine your own web page
          </h1>
          <textarea
            className="resize-none w-full h-[360px] bg-white bg-opacity-30 rounded-lg p-5 text-[#E3E3E3] placeholder:text-[#E3E3E3] focus:outline-none font-bold text-[20px]"
            placeholder="Write down your keyword"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button
            className="w-full py-3 bg-white font-extrabold text-[24px] shadow-md rounded-lg"
            onClick={() =>
              navigate("/loading", { state: { question1, question2 } })
            }
          >
            Feel the Magic 🪄
          </button>
        </div>
      </div>
    </>
  );
};

export default Keyword;
