import React, { Fragment } from "react";

import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

import { useMessages, useTranslations } from "next-intl";
import { MdArrowForward } from "react-icons/md";

const Menu = ({ showCatMenu, setShowCatMenu }) => {
  const t = useTranslations("Header");
  const messages = useMessages();

  const navLinks = Object.keys(messages.Header.navLinks);
  const subNavCategories = Object.keys(messages.Header.subNavLinks);


  return (
    <nav>
      <ul className="hidden 964Screen:flex items-center gap-8 font-medium text-secondary">
        {navLinks.map((navLink) => {
          return (
            <Fragment key={`${t(`navLinks.${navLink}.id`)}`}>
              {!messages.Header.navLinks[navLink].href ? (
                <li
                  className="relative cursor-pointer  "
                  onMouseEnter={() => setShowCatMenu(true)}
                  onMouseLeave={() => setShowCatMenu(false)}
                >
                  <div
                    className={`flex group items-center gap-2 ${
                      showCatMenu ? "text-primary" : "text-secondary"
                    } `}
                  >
                    {`${t(`navLinks.${navLink}.label`)}`}
                    <BsChevronDown
                      size={14}
                      className={`text-current transition-transform ease-in-out duration-200 ${
                        showCatMenu
                          ? "text-primary rotate-180"
                          : "text-secondary rotate-0"
                      } `}
                    />
                  </div>

                  <ul
                    className={`bg-white  p-4 w-full border min-w-[788px] flex justify-center items-start gap-3 absolute  left-[-300%]
                               rounded-xl   shadow-[0px_10px_40px_rgba(0,0,0,0.05)] duration-300    ${
                                 showCatMenu
                                   ? "visible top-full opacity-100"
                                   : "invisible top-[120%] opacity-0"
                               }`}
                  >
                    {subNavCategories.map((subNavCategory, index) => {
                      return (
                        <li className="dropdown " key={index}>
                          <div className="dropdown-inner">
                            <div className="dropdown-item">
                              <h3
                                className="relative item-heading mt-2 mb-[6px]     text-secondary font-semibold 
                            after:content-[''] after:absolute after:top-full after:left-0 after:h-[2px] after:w-8 after:bg-primary"
                              >
                                {t(`subNavLinks.${subNavCategory}.category`)}:
                              </h3>

                              {Object.keys(
                                messages.Header.subNavLinks[subNavCategory]
                                  .products
                              ).map((product, i) => {
                                return (
                                  <Link
                                    key={i}
                                    className="group/link  flex items-center justify-between rounded-md p-3 duration-150  mb-2"
                                    href={t(
                                      `subNavLinks.${subNavCategory}.products.${product}.href`
                                    )}
                                    onClick={() => setShowCatMenu(false)}
                                  >
                                    <span className="flex ">
                                      <span className=" ">
                                        <span className="mb-1 block text-base font-semibold text-dark group-hover/link:text-secondary ">
                                          {t(
                                            `subNavLinks.${subNavCategory}.products.${product}.label`
                                          )}
                                        </span>
                                        <span className="block text-sm text-[#9597a8]">
                                          {t(
                                            `subNavLinks.${subNavCategory}.products.${product}.description`
                                          )}
                                        </span>
                                      </span>
                                    </span>
                                    <span className="dropdown-arrow transition-all opacity-0 translate-x-[-0.25rem] group-hover/link:translate-x-0 group-hover/link:opacity-100 text-primary">
                                      <MdArrowForward className="text-xl" />
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ) : (
                <li className="cursor-pointer">
                  <Link
                    href={`${t(`navLinks.${navLink}.href`)}`}
                    className=" transition-colors ease-in-out duration-150 hover:text-primary "
                  >
                    {`${t(`navLinks.${navLink}.label`)}`}
                  </Link>
                </li>
              )}
            </Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
