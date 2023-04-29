import React, { useEffect, useState } from "react";

const TopBar = () => {
  const [scrollY, setScrollY] = useState(0);
  const updateScroll = () => {
    setScrollY(window.scrollY);
  };
  const menus = [
    {
      title: "로그인",
      href: "/login",
    },
    {
      title: "회원가입",
      href: "/",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", updateScroll);
    }, 200);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 bg-white w-full h-14 flex items-center justify-center ${
        scrollY !== 0 && " border-b"
      }`}
    >
      <div className="w-full max-w-6xl flex justify-between p-4 lg:p-6">
        <div />
        <ul className="flex justify-center items-center list-none gap-8">
          {menus.map((menu) => (
            <li
              className="font-pretendard  font-medium text-sm"
              key={menu.title}
            >
              <a href={menu.href}>{menu.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default TopBar;
