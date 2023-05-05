import { useLocation } from "react-router-dom";

const Loading = ({ text }) => {
  const { state } = useLocation();

  console.log(state);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-black">
      <div className="relative w-[120px] h-[120px]">
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-[loaderAnimate_2s_ease-in-out_infinite]" />
        <div
          className="absolute inset-0 rounded-full bg-white bg-opacity-50 backdrop-blur-md animate-[loaderAnimate_2s_ease-in-out_infinite]"
          style={{ animationDelay: "-1s" }}
        ></div>
      </div>
      <p className="mt-[52px] font-extrabold text-[24px] text-white">{ state ? "Loading for Result . . ." :{text} }</p>
    </div>
  );
};

export default Loading;
