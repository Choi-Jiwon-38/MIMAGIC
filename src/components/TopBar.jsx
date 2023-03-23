import React from "react";

const TopBar = () => {
  const menus = [
    {
      title: "로그인",
      href: "/",
    },
    {
      title: "회원가입",
      href: "/",
    },
  ];

  return (
    <div className="w-full">
      <nav>
        <ul>
          {menus.map((menu) => (
            <li key={menu.title}>
              <a href={menu.href}>{menu.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TopBar;
