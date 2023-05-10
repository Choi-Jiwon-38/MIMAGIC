import { firebaseAuth, createUserWithEmailAndPassword } from "../firebase";
import { useState } from "react";
import TopBar from "../components/TopBar";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUserName] = useState(""); // username(e-mail)의 state, setState, 회원가입 시 정보로 넘겨질 에정
  const [password, setPassword] = useState(""); // password의 state, setState, 회원가입 시 정보로 넘겨질 예정
  const [pswagain, setPswagain] = useState(""); // 비밀번호 재확인을 위하여 사용되는 state, setState
  const [errorMsg, setErrorMsg] = useState(""); // 사용자에게 출력될 에러 메세지의 state, setState

  const navigate = useNavigate();               // 특정 행동(회원가입) 발생 시 url 이동을 위하여 useNavigation() 이용

  const handleInputUsername = (e) => {          // username input이 onChange 될때마다 실행되는 함수 
    setUserName(e.target.value);                // username(state)를 input의 value 값으로 업데이트
  };

  const handleInputPassword = (e) => {          // password input이 onChange 될때마다 실행되는 함수
    setPassword(e.target.value);                // passwrod(state)를 input의 value 값으로 업데이트
  };

  const handleInputPswAgain = (e) => {          // confirm password input이 onChange 될때마다 실행되는 함수
    setPswagain(e.target.value);                // pswagain(state)를 input의 value 값으로 업데이트
  };

  const signup = async () => {                  // 'Create your account' 버튼이 클릭되면 발생하는 함수
    if (username !== "" && password !== "" && password === pswagain) {    // username, password가 공백이 아니고, 비밀번호 재확인이 성공한 경우
      try {
        createUserWithEmailAndPassword(firebaseAuth, username, password); // firebaseAuth, username, password를 파라미터로 넘겨서 새로운 User를 생성
        setUserName("");  // 초기 상태로 state 변경
        setPassword("");  // 초기 상태로 state 변경
        setErrorMsg("");  // 초기 상태로 state 변경
        navigate('/');    // 정상적으로 회원가입 완료 및 state 초기화가 완료되었으므로 '/'으로 redirect
      } catch (err) {     // firebase의 Auth가 제공하는 error message를 바탕으로 예외 처리 
        switch (err.code) {
          case "auth/weak-password":          // 입력한 password가 취약한 경우
            setErrorMsg("⚠ weak password");
            break;
          case "auth/invalid-email":          // 입력한 username이 email 형식에 맞지 않는 값을 설정한 경우
            setErrorMsg("⚠ invalid email");
            break;
          case "auth/email-already-in-use":   // 입력한 username이 이미 firebase에 등록되어 있는 경우(해당 email 정보로 회원가입이 이미 되어있는 경우) 
            setErrorMsg("⚠ email already in use");
            break;
          default:                            // 나머지 error message가 에러에 인하여 반환된 경우(기본값)
            setErrorMsg("⚠ signup error"); 
            break;
        }
      }
    } else { // username이나 password가 공백값을 가지거나, 비밀번호와 비밀번호 재확인 값이 일치하지 않는 경우
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
