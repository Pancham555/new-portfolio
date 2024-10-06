"use client";
import { BookOpenText, FileCode2, House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  // alert(pathname);
  return (
    <div className="flex md:gap-10 md:justify-start justify-between md:py-10 py-5">
      <Link
        href="/"
        className={`flex gap-2 cursor-pointer items-center px-2 pb-1 border-slate-500 ${
          pathname === "/" ? "border-b-2 font-medium" : "border-b-0"
        }`}
      >
        <House />
        <span>Home</span>
      </Link>
      <Link
        href="/blog"
        className={`flex gap-2 cursor-pointer items-center px-2 pb-1 border-slate-500 ${
          pathname === "/blog" ? "border-b-2 font-medium" : "border-b-0"
        }`}
      >
        <BookOpenText />
        <span>Blog</span>
      </Link>
      <Link
        href="/projects"
        className={`flex gap-2 cursor-pointer items-center px-2 pb-1 border-slate-500 ${
          pathname === "/projects" ? "border-b-2 font-medium" : "border-b-0"
        }`}
      >
        <FileCode2 />
        <span>Projects</span>
      </Link>
    </div>
  );
}
