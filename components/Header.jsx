"use client";

import Link from "next/link";
import { logo } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import { RiCloseLargeLine, RiMenu4Line } from "@remixicon/react";
import { navigation } from "@/constants";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 h-[90px] shadow-xl z-30 bg-white">
      <div className="container mx-auto flex justify-between h-full items-center">
        <Link href="#">
          <Image src={logo} alt="logo" />
        </Link>

        <nav>
          <div className="lg:hidden" id="nav_trigger_btn" onClick={menuToggle}>
            {menuOpen ? (
              <RiCloseLargeLine size={36} className="text-4xl text-primary" />
            ) : (
              <RiMenu4Line size={36} className="text-4xl text-primary" />
            )}
          </div>

          <div
            className={`fixed w-full h-0 p-0 bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300 ${menuOpen ? "nav-is-open" : ""}`}
          >
            {navigation.map((item) => (
              <Link key={item.title} href={item.url}>
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
