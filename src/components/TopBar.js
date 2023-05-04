import React from "react";

const TopBar = () => {
  const menus = [
    {
      title: "로그인",
      href: "/login",
    },
    {
      title: "회원가입",
      href: "/signup",
    },
  ];

  return (
    <header className="fixed top-0 z-50 bg-white w-full h-14 flex items-center justify-center">
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
