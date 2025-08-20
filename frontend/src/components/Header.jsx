"use client";

import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import Logo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import LocaleSwitcher from "./LocaleSwitcher";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import TouchButton from "./TouchButton";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null); // 👈 NEW

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && mobileMenu) {
        setMobileMenu(false);
        setActiveSubmenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenu]);

  return (
    <header className="w-full h-[60px] 964Screen:h-[80px] bg-white flex justify-between items-center z-20 sticky top-0 left-0">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" onClick={() => setMobileMenu(false)}>
            <Image
              src={Logo}
              alt="Logo"
              width={144}
              height={180}
              className="object-cover h-full 964Screen:w-40"
            />
          </Link>

          <nav>
            {/* Desktop menu */}
            <Menu />

            {/* Mobile menu */}
            {mobileMenu && (
              <MenuMobile
                mobileMenu={mobileMenu}
                activeSubmenu={activeSubmenu} // 👈 pass it down
                setActiveSubmenu={setActiveSubmenu} // 👈 pass setter
                setMobileMenu={setMobileMenu}
              />
            )}
          </nav>

          <div className="flex items-center ">
            <div className="nav_actions hidden 964Screen:flex items-center gap-5 ">
              <TouchButton />
              <LocaleSwitcher />
            </div>

            {/* Mobile icon start */}
            <div className="rounded-full flex gap-2 964Screen:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
              <BiMenuAltRight
                className="text-3xl"
                onClick={() => setMobileMenu(true)}
              />
            </div>
            {/* Mobile icon end */}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
