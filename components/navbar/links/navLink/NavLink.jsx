"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({item}) {
  const pathname = usePathname();
  return (
    <Link href={item.path} className={`inline-block min-w-[100px] p-[10px] rounded-[20px] font-[500px] text-center ${pathname === item.path && "text-[--bg] bg-[--text]"} `}>{item.title}</Link>
  )
}
