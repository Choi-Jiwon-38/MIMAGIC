import TopBar from "../components/TopBar";

const Result = ({ icon, name, concept }) => {
  return (
    <>
      <TopBar />
      <div className="flex bg-black w-screen h-screen items-center justify-center gap-[44px]">
        <div
          className="flex flex-col justify-center items-center w-[550px] h-[660px] bg-blur-5 backdrop-blur-5 rounded-2xl p-11 gap-9"
          style={{
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(100% 64.41% at 4.48% 3.92%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
            boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="rounded-full bg-[#d9d9d9] w-[128px] h-[128px]">
            {icon}
          </div>
          <div className="w-full flex flex-col gap-3">
            <p className="font-black text-white text-[20px]">
              how about this name...
            </p>
            <div className="bg-[#d9d9d9] bg-opacity-80 text-white rounded-2xl w-full h-[104px]">
              {name}
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <p className="font-black text-white text-[20px]">
              how about this concept...
            </p>
            <div className="bg-[#d9d9d9] bg-opacity-80 text-white rounded-2xl w-full h-[104px]">
              {concept}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col justify-between w-[550px] h-[660px] bg-blur-5 backdrop-blur-5 rounded-2xl p-11"
          style={{
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(100% 64.41% at 4.48% 3.92%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
            boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="w-full h-[360px] bg-[#d9d9d9] rounded-xl" />
          <div className="flex flex-col gap-4">
            <div className="w-full py-[18px] text-center text-[20px] font-black rounded-xl bg-white cursor-pointer">
              Save this Template
            </div>
            <div className="w-full py-[18px] text-center text-[20px] font-black rounded-xl bg-white cursor-pointer">
              Upgrade to Pro License
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
