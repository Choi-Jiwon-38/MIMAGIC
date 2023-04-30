import TopBar from "../components/TopBar";

const Keyword = () => {
  return (
    <>
      <TopBar />
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-black">
        <form className="" id="keyword">
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
            />
            <button
              className="w-full py-3 bg-white font-extrabold text-[24px] shadow-md rounded-lg"
              type="submit"
            >
              Feel the Magic 🪄
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Keyword;
