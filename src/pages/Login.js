import { firebaseAuth, signInWithEmailAndPassword } from "../firebase";
import { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import { useRecoilState } from "recoil";
import { userState } from "../atom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");       // username(e-mail)의 state, setState, 로그인 시 'signInWithEmailAndPassword' 파라미터로 넘겨질 에정
  const [password, setPassword] = useState("");       // password의 state, setState, 로그인 시 'signInWithEmailAndPassword' 파라미터로  정보로 넘겨질 예정
  const [errorMsg, setErrorMsg] = useState("");       // 사용자에게 출력될 에러 메세지의 state, setState
  const [user, setUser] = useRecoilState(userState);  // useRecoilState()을 이용하여 read write 모두 가능한 state, setState를 추출

  const navigate = useNavigate();                     // 특정 행동(로그인) 발생 시 url 이동을 위하여 useNavigation() 이용

  const handleInputUsername = (e) => {                // username input이 onChange 될때마다 실행되는 함수
    setUserName(e.target.value);                      // username(state)를 input의 value 값으로 업데이트
  };

  const handleInputPassword = (e) => {                // password input이 onChange 될때마다 실행되는 함수
    setPassword(e.target.value);                      // password(state)를 input의 value 값으로 업데이트
  };

  // login 상태인 경우에는 login 페이지로 접근하면 Home으로 redirect
  useEffect(() => {
    if (user.isLoggined) {
      navigate('/');
    } 
  }, [navigate, user.isLoggined]);

  const login = async () => {
    try {
      const curUserInfo = await signInWithEmailAndPassword(       // 주어진 정보로 firebase를 이용하여 로그인 시도 -> 결과값은 curUserInfo에 저장
        firebaseAuth,   // 파라미터로 firebaseAuth 전달
        username,       // 파라미터로 username <- input value값이 저장된 state 전달
        password        // 파라미터로 password <- input value값이 저장된 state 전달
      ); 
      setUserName("");  // 초기 상태로 state 변경
      setPassword("");  // 초기 상태로 state 변경
      setErrorMsg("");  // 초기 상태로 state 변경
      setUser({ id: curUserInfo.user.email, isLoggined: true });  // 정상적으로 로그인 성공 -> 현재 로그인된 사용자의 정보 중 email 정보 저장 및 로그인 상태 true로 변경
      navigate("/");                  // firebase의 Auth가 제공하는 error message를 바탕으로 예외 처리 
    } catch (err) {
      switch (err.code) {             // Admin Authentication API 오류 처리
        case "auth/user-not-found":   // 제공된 식별자에 해당하는 기존 사용자 레코드가 존재하지 않은 경우
          setErrorMsg("⚠ user not found");
          break;
        case "auth/wrong-password":   // 비밀번호가 일치하지 않는 경우
          setErrorMsg("⚠ wrong password");
          break;
        default:                      // 위 두 가지 경우를 제외한 나머지 API 오류에 해당하는 경우
          setErrorMsg("⚠ login failed");
          break;
      }
    }
  };

  if (!window.Kakao.isInitialized()) {  // 소셜 로그인 서비스(kakao 연동)을 제공하기 위한 코드
    window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
  }

  const onLoginWithKakao = () => {     // 'with kakao' 버튼을 클릭하면 실행되는 함수
    // eslint-disable-next-line no-restricted-globals
    const redirectUri = `${location.origin}/redirect/kakao`;
    window.Kakao.Auth.authorize({     // kakao development에 등록되어 있는 redirectUri을 이용하여 인가코드 발급
      redirectUri,
    });
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
          <h1 className="text-[24px] font-extrabold text-white">Login</h1>
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
            <label className="block pt-[12px]">
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
            <p className=" text-white font-extrabold pt-2 h-[14px]">
              {errorMsg}
            </p>
            <button
              className="w-full py-[10px] bg-white font-extrabold mt-7 mb-2 rounded-md"
              onClick={() => {
                login();
              }}
            >
              Log in
            </button>
            <div className="flex gap-[6px]">
              <button
                className="w-full py-[10px] bg-white bg-opacity-50 rounded-md font-extrabold text-white"
                onClick={() => {
                  onLoginWithKakao();
                }}
              >
                with Kakao
              </button>
              <button className="w-full py-[10px] bg-white bg-opacity-50 rounded-md font-extrabold text-white">
                with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
