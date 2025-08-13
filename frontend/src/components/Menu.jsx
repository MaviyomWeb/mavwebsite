import React, { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { BsChevronDown } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";

const Menu = () => {
  const t = useTranslations("Header");
  const navLinks = t.raw("navLinks");
  const productSubLinks = t.raw("subNavLinks");
  const aboutSubLinks = t.raw("aboutSubLinks");

  const [hovered, setHovered] = useState(null);

  return (
    <nav className="hidden 964Screen:flex items-center gap-8 font-medium text-secondary">
      {Object.keys(navLinks).map((key) => {
        const navItem = navLinks[key];
        const isDropdown = navItem.subMenu;

        return (
          <div
            key={key}
            className="relative"
            onMouseEnter={() => setHovered(key)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <Link href={navItem.href || "#"}>
                {navItem.label}
              </Link>
              {isDropdown && <BsChevronDown size={14} className="text-secondary" />}
            </div>

            {isDropdown && hovered === key && (
              <div className={`absolute top-full left-0 z-50  bg-white rounded-xl shadow-[0px_10px_40px_rgba(0,0,0,0.05)]`}>
                {/* About submenu */}
                {key === "About" && (
                  <div className="min-w-[300px] p-6 w-full bg-white border justify-center items-start gap-3 absolute">
                    {Object.keys(aboutSubLinks).map((itemKey) => (
                      <Link key={itemKey} href={aboutSubLinks[itemKey].href}>
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          {aboutSubLinks[itemKey].label}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Products submenu */}
                {key === "Products" && (
                  <div className={`dropdown w-full bg-white p-6 min-w-[750px] border flex justify-center items-start gap-3 absolute left-1/3 transform -translate-x-1/3
 rounded-xl shadow-[0px_10px_40px_rgba(0,0,0,0.05)] duration-300 `}>
                    {Object.keys(productSubLinks).map((catKey) => {
                      const category = productSubLinks[catKey];
                      return (
                        <div key={catKey} className="dropdown w-[344px] ">
                          <h3 className="text-secondary font-semibold mb-2 relative after:content-[''] after:absolute after:top-full after:left-0 after:h-[2px] after:w-8 after:bg-primary">
                            {category.category}:
                          </h3>
                          {Object.keys(category.products).map((productKey) => {
                            const product = category.products[productKey];
                            return (
                              <Link key={productKey} href={product.href}>
                                <div className="group/link flex items-center justify-between rounded-md p-3 mb-2 hover:bg-gray-100">
                                  <div>
                                    <span className="block text-base font-semibold text-dark group-hover/link:text-secondary">
                                      {product.label}
                                    </span>
                                    <span className="block text-sm text-[#9597a8]">
                                      {product.description}
                                    </span>
                                  </div>
                                  <span className="transition-all opacity-0 translate-x-[-0.25rem] group-hover/link:translate-x-0 group-hover/link:opacity-100 text-primary">
                                    <MdArrowForward className="text-xl" />
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Menu;
