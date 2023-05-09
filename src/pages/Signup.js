import { firebaseAuth, createUserWithEmailAndPassword } from "../firebase";
import { useState } from "react";
import TopBar from "../components/TopBar";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [pswagain, setPswagain] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleInputUsername = (e) => {
    setUserName(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleInputPswAgain = (e) => {
    setPswagain(e.target.value);
  };

  const signup = async () => {
    if (username !== "" && password !== "" && password === pswagain) {
      try {
        createUserWithEmailAndPassword(firebaseAuth, username, password);
        setUserName("");
        setPassword("");
        setErrorMsg("");
        navigate('/');
      } catch (err) {
        switch (err.code) {
          case "auth/weak-password":
            setErrorMsg("⚠ weak password");
            break;
          case "auth/invalid-email":
            setErrorMsg("⚠ invalid email");
            break;
          case "auth/email-already-in-use":
            setErrorMsg("⚠ email already in use");
            break;
          default:
            setErrorMsg("⚠ signup error");
            break;
        }
      }
    } else {
      setErrorMsg("⚠ incorrect password");
    }
  };

  return (
    <>
      <TopBar />
      <div className="w-screen h-screen bg-black flex justify-center items-center">
        <div
          className="flex flex-col justify-center items-center w-[360px] h-[450px] bg-blur-5 backdrop-blur-5 rounded-2xl px-[30px]"
          style={{
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(100% 64.41% at 4.48% 3.92%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
            boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <h1 className="text-[24px] font-extrabold text-white">
            Create Account
          </h1>
          <div className="w-full">
            <label className="block py-[12px]">
              <span className="text-base font-extrabold text-white">
                Username
              </span>
              <input
                type="text"
                className="font-extrabold text-white placeholder-opacity-100::placeholder mt-2 px-3 py-2 bg-[#d9d9d9] bg-opacity-50 shadow-sm placeholder-white focus:outline-none block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Email"
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
                className="font-extrabold text-white placeholder-opacity-100::placeholder mt-2 px-3 py-2 bg-[#d9d9d9] bg-opacity-50 shadow-sm placeholder-white focus:outline-none block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Password"
                onChange={handleInputPassword}
                value={password}
              />
            </label>
            <label className="block py-[12px]">
              <span className="text-base font-extrabold text-white">
                Confirm Password
              </span>
              <input
                type="password"
                className="font-extrabold text-white placeholder-opacity-100::placeholder mt-2 px-3 py-2 bg-[#d9d9d9] bg-opacity-50 shadow-sm placeholder-white focus:outline-none block w-full rounded-md sm:text-sm focus:ring-1"
                onChange={handleInputPswAgain}
                value={pswagain}
              />
            </label>
            <p className=" text-white font-extrabold h-[20px]">{errorMsg}</p>
            <button
              className="w-full py-[10px] mt-2 bg-white font-extrabold mb-2 rounded-md"
              onClick={() => {
                signup();
              }}
            >
              Create your account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
