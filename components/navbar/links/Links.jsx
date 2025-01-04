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
    <div id="links-container">
      {/* 桌面端时 显示上面的链接 */}
      <div id="links-links" className="max-md:hidden">
        {links.map((link) => {
          return <NavLink key={link.title} item={link} />;
        })}

        {session ? (
          <>
            {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}} />}
           <button className="bg-blue-300 text-[--bg] p-[10px] cursor-pointer font-bold hover:bg-blue-500 duration-300">Logout</button>
          </>
        ): (
          <NavLink item={{title: "Login", path: "/login"}} />
        )}
      </div>
      {/* 移动端时 显示下面的按钮 用来开启选项栏 */}
      <button className="md:hidden block cursor-pointer" onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {
        (
          open && <div className="md:hidden flex flex-col justify-center items-center bg-slate-400 absolute top-[100px] right-0 w-1/2 h-[calc(100vh-100px)]" >
            {links.map((link) => {
              return <NavLink key={link.title} item={link} />;
            })}
          </div>
        )
      }
    </div>
  );
};

export default Links;
