"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const active = usePathname();


  const link = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="bg-red-600 h-20 flex items-center justify-between px-10">
      <h1>NEXT.JS</h1>
      <ul className="flex gap-5">
        {link.map((l, idx) => (
          <Link className={active === l.path && 'text-white'} key={idx} href={l.path}>{l.title}</Link>
        ))}
      </ul>
    </div>
  );
}
