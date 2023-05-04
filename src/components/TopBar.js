import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../atom";

const TopBar = () => {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const logout = () => {
    setUser({ id: "", isLoggined: false });
    navigate("/");
  };

  return (
    <header className="fixed top-0 z-50 bg-white w-full h-14 flex items-center justify-center">
      <div className="w-full max-w-6xl flex justify-between p-4 lg:p-6">
        <div />
        <ul className="flex justify-center items-center list-none gap-8">
          <li className="font-pretendard font-medium text-sm">
            {user.isLoggined ? (
              <p className="cursor-pointer" onClick={() => logout()}>
                로그아웃
              </p>
            ) : (
              <a href="/login">로그인</a>
            )}
          </li>
          <li className="font-pretendard font-medium text-sm">
            <a href="/signup">회원가입</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default TopBar;
