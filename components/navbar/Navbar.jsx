import React from "react";
import Links from "./links/Links";

function Navbar() {
  const logo = "Leafmw";

  return (
    <nav className="h-[100px] flex items-center justify-between">
      <div className="text-[30px] font-bold">{logo}</div>
      {/* <ul className="flex text-lg font-semibold">
        <li className="m-6">Homepage</li>
        <li className="m-6">About</li>
        <li className="m-6">Contact</li>
        <li className="m-6">Blog</li>
        <li className="m-6">Login</li>
      </ul> */}
      <div className="flex gap-[10px] items-center">
        <Links />
      </div>
    </nav>
  );
}

export default Navbar;
