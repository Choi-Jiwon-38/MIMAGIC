import { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleInputUsername = (e) => {
    setUserName(e.target.value);
    console.log(username);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div
        className="flex flex-col justify-center items-center w-[360px] h-[450px] bg-blur-5 backdrop-blur-5 rounded-2xl px-[30px]"
        style={{
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(100% 64.41% at 4.48% 3.92%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
          boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <h1 className="text-[24px] font-extrabold text-white">Login</h1>
        <form className="w-full" id="loginForm">
          <label className="block py-[12px]">
            <span className="text-base font-extrabold text-white">
              Username
            </span>
            <input
              type="text"
              name="username"
              className="font-extrabold text-white placeholder-opacity-100::placeholder mt-2 px-3 py-2 bg-[#d9d9d9] bg-opacity-50 shadow-sm placeholder-white focus:outline-none block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Email or Phone"
              onChange={handleInputUsername}
              value={username}
            />
          </label>
          <label className="block py-[12px]">
            <span className="text-base font-extrabold text-white">
              Password
            </span>
            <input
              type="password"
              name="password"
              className="font-extrabold text-white placeholder-opacity-100::placeholder mt-2 px-3 py-2 bg-[#d9d9d9] bg-opacity-50 shadow-sm placeholder-white focus:outline-none block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Password"
              onChange={handleInputPassword}
              value={password}
            />
          </label>
          <button
            className="w-full py-[10px] bg-white font-extrabold mt-7 mb-2 rounded-md"
            type="submit"
            form="loginForm"
          >
            Log in
          </button>
          <div className="flex gap-[6px]">
            <button className="w-full py-[10px] bg-white bg-opacity-50 rounded-md font-extrabold text-white">
              with Kakao
            </button>
            <button className="w-full py-[10px] bg-white bg-opacity-50 rounded-md font-extrabold text-white">
              with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
