import { useEffect, useState } from "react";

const Loading = ({ text }) => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => handleSubmit());

  const handleSubmit = () => {
    fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
      console.log(message);
      console.log(response);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-black">
      <div className="relative w-[120px] h-[120px]">
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-[loaderAnimate_2s_ease-in-out_infinite]" />
        <div
          className="absolute inset-0 rounded-full bg-white bg-opacity-50 backdrop-blur-md animate-[loaderAnimate_2s_ease-in-out_infinite]"
          style={{ animationDelay: "-1s" }}
        ></div>
      </div>
      <p className="mt-[52px] font-extrabold text-[24px] text-white">{text}</p>
    </div>
  );
};

export default Loading;
