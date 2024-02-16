"use client";
import { LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        <div className="hidden md:flex gap-4 w-1/3">
        {LINKS.map((link) => (
              <NavLink href={link.title} link={link} />
            ))}
        </div>
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="font-semibold text-sm bg-black rounded-md p-1 flex items-center justify-center"
        >
          <span className="text-white mr-1">Anthony</span>
          <span className="w-12 h-8 rounded bg-white text-black  flex items-center justify-center">
            David
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 w-1/3">
            <Link href="https://github.com/itachouille">
                <Image src="/github.png" alt="github logo" width={24} height={24} />
            </Link>
            <Link href="#">
                <Image src="/linkedin.png" alt="linkedin logo" width={24} height={24} />
            </Link>
      </div>
      <div className="md:hidden">
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => setOpen(!open)}>
          <div className="w-10 h-1 bg-black rounded" />
          <div className="w-10 h-1 bg-black rounded" />
          <div className="w-10 h-1 bg-black rounded" />
        </button>
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {LINKS.map((link) => (
              <Link key={link.title} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
