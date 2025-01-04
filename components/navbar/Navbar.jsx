import React from "react";
import Links from "./links/Links";
import Link from "next/link";
function Navbar() {
  const logo = "Leafmw";

  return (
    <nav className="h-[100px] flex items-center justify-between">
      <Link href="/">
        <div className="text-[30px] font-bold">{logo}</div>
      </Link>
      {/* <ul className="flex text-lg font-semibold">
        <li className="m-6">Homepage</li>
        <li className="m-6">About</li>
        <li className="m-6">Contact</li>
        <li className="m-6">Blog</li>
        <li className="m-6">Login</li>
      </ul> */}
      <div>
        <Links />
      </div>
    </nav>
  );
}

export default Navbar;
