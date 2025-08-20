import React, { Fragment, useEffect } from "react";

import { NAV_LINKS, SUB_NAV_LINKS } from "@/constants";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

import { useMessages } from "next-intl";
import Image from "next/image";
import { VscChromeClose } from "react-icons/vsc";
import { useTranslations } from "use-intl";
import LocaleSwitcher from "./LocaleSwitcher";

const MenuMobile = ({ activeSubmenu, setActiveSubmenu, setMobileMenu, mobileMenu }) => {
  const hideShowMenu = () => {
    setActiveSubmenu(null);
    setMobileMenu(false);
  };

  useEffect(() => {
    if (mobileMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileMenu]);

  const messages = useMessages();
  const t = useTranslations("Header");

  const navLinks = Object.keys(messages.Header.navLinks);
  const subNavCategories = Object.keys(messages.Header.subNavLinks);
  const aboutLinks = Object.keys(messages.Header.aboutSubLinks);

  return (
    <div className="">
      <div
        className={`flex flex-col gap-4 964Screen:hidden  font-medium fixed top-0   right-[-320px]   w-full h-screen max-w-[320px] bg-white   px-4  pb-20 overflow-y-auto  z-50 transition-all duration-[400ms] transition-cubic-out  ${
          mobileMenu
            ? "visible duration-500 translate-x-[-320px]"
            : " invisible "
        }`}
      >
        <div className="flex items-center justify-between py-2">
          <Link href="/" onClick={() => setMobileMenu(false)}>
            <img
              src="/logo.png"
              alt="logo"
              className="h-full w-36 964Screen:w-40   object-cover "
            />
          </Link>

          <div className=" rounded-full flex 964Screen:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            <VscChromeClose
              className="text-[28px]"
              onClick={() => setMobileMenu(false)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between px-1">
          <span>{t("chooseLanguage")}</span>
          <LocaleSwitcher />
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-4 pl-2 text-secondary">
          {navLinks.map((navLink) => {
            const linkData = messages.Header.navLinks[navLink];
            const isAbout = navLink === "About";
            const isProducts = navLink === "Products";

            if (isAbout || isProducts) {
              return (
                <li key={linkData.id} className="relative flex flex-col">
                  {/* Toggle Button */}
                  <button
                    className={`cursor-pointer flex text-lg items-center justify-between ${
                      activeSubmenu === navLink.toLowerCase() ? "text-primary" : "text-secondary"
                    }`}
                    onClick={() =>
                      setActiveSubmenu(
                        activeSubmenu === navLink.toLowerCase() ? null : navLink.toLowerCase()
                      )
                    }
                  >
                    {t(`navLinks.${navLink}.label`)}
                    <BsChevronDown
                      size={20}
                      className={`text-current transition-transform ease-in-out duration-200  ${
                        activeSubmenu === navLink.toLowerCase() ? "rotate-180 text-primary" : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* About Submenu */}
                  {isAbout && activeSubmenu === "about" && (
                    <ul className="pl-4 mt-2 flex flex-col gap-2">
                      {aboutLinks.map((aboutKey) => (
                        <li key={aboutKey}>
                          <Link
                            href={t(`aboutSubLinks.${aboutKey}.href`)}
                            onClick={hideShowMenu}
                            className="block text-lg hover:text-primary"
                          >
                            {t(`aboutSubLinks.${aboutKey}.label`)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Products Submenu */}
                  {isProducts && activeSubmenu === "products" && (
                    <ul className="pl-4 mt-2">
                      {subNavCategories.map((subNavCategory, index) => (
                        <li key={index}>
                          <h3 className="relative item-heading mt-2 mb-3  text-base   text-secondary font-semibold *:
                            after:content-[''] after:absolute after:top-full after:left-0 after:h-[3px] after:w-8 after:bg-primary
                            ">
                            {t(`subNavLinks.${subNavCategory}.category`)}:
                          </h3>
                          {Object.keys(messages.Header.subNavLinks[subNavCategory].products).map(
                            (product, i) => (
                              <Link
                                key={i} 
                                className="group/link flex flex-col lg:flex-row items-center md:items-start justify-between rounded-md p-1 border  duration-150  mb-3   "
                                href={t(
                                  `subNavLinks.${subNavCategory}.products.${product}.href`
                                )}
                                onClick={hideShowMenu}
                              >
                                <Image
                                  src={t(
                                    `subNavLinks.${subNavCategory}.products.${product}.image`
                                  )}
                                  alt={t(
                                    `subNavLinks.${subNavCategory}.products.${product}.label`
                                  )}
                                  width={200}
                                  height={80}
                                  sizes="100vw"
                                  placeholder="blur"
                                  blurDataURL="/1x1-ffffffff.webp"
                                  style={{ width: "100%", height: "auto" }}
                                />
                                <div className="flex flex-col text-center ml-2">
                                  <span className="mb-1 text-xl font-semibold text-dark group-hover/link:text-secondary">
                                    {t(
                                      `subNavLinks.${subNavCategory}.products.${product}.label`
                                    )}
                                  </span>
                                  <span className="text-gray-600 text-sm">
                                    {t(
                                      `subNavLinks.${subNavCategory}.products.${product}.description`
                                    )}
                                  </span>
                                </div>
                              </Link>
                            )
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            // Normal links (Home, Careers, Contact)
            return (
              <li key={linkData.id}>
                <Link
                  href={t(`navLinks.${navLink}.href`)}
                  onClick={hideShowMenu}
                  className="transition-colors text-lg hover:text-primary"
                >
                  {t(`navLinks.${navLink}.label`)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        onClick={hideShowMenu}
        className={` fixed top-0 left-0 bottom-0 h-screen w-full bg-[#111827a0]  overlay transition-all duration-200 ease z-40 cursor-pointer ${
          mobileMenu ? "opacity-50 visible" : "opacity-100 invisible "
        }`}
      ></div>
    </div>
  );
};

export default MenuMobile;
