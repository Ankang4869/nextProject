"use client";
import { useState } from "react";
import NavLink from "./navLink/NavLink";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {

  const [open, setOpen] = useState(false);

  // TEMPORARY
  const session = true;
  const isAdmin = true;
  
  return (
    // 响应式
    <>
      {/* 桌面端时 显示上面的链接 */}
      <div className="max-md:hidden">

        {links.map((link) => {
          return <NavLink key={link.title} item={link} />;
        })}

        {session ? (
          <>
            {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}} />}
           <button className="bg-blue-300 text-[--bg] p-[10px] ml-[20px] cursor-pointer font-bold hover:bg-blue-500 duration-300">Logout</button>
          </>
        ): (
          <NavLink item={{title: "Login", path: "/login"}} />
        )}
      </div>  

      {/* 移动端时 显示下面的按钮 用来开启选项栏 */}
      <button className="md:hidden" onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {
        (
          <div className="flex flex-col justify-center bg-slate-400" >
            {links.map((link) => {
              return <NavLink key={link.title} item={link} />;
            })}
          </div>
        )
      }
    </>
  );
};

export default Links;
