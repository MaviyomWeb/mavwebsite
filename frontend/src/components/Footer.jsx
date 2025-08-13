import Link from "next/link";
import React from "react";
import Container from "./Container";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { AiFillPhone } from "react-icons/ai";

import { FOOTER_LINKS } from "@/constants";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import LocaleSwitcher from "./LocaleSwitcher";

const icons = {
  officeContact: <AiFillPhone className="rotate-90" />,
  emailAddress: <AiFillMail />,
  visitOffice: <HiLocationMarker />,
};

const Footer = () => {
  const t = useTranslations("Footer");
  const messages = useMessages();

  const footerLinks = Object.keys(messages.Footer.footerLinks);
  const contactInfoLinks = Object.keys(messages.Footer.contactInfo.links);

  return (
    <>
      <footer className="relative w-full h-auto  bg-gray-900 pt-5 md:pt-10 ">
        <Container>
          <div className="footer-top w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[25%_25%_20%_30%]  ">
            <FooterColumn>
              <Link href="/" className="mb-10">
                <Image src="/logo.png" alt="logo" width={194} height={164} />
              </Link>
              <p className="my-4 text-[#ccc] max-w-[365px]">
                {t("description")}
              </p>
            </FooterColumn>

            {footerLinks.map((column, index) => {
              return (
                <FooterColumn
                  title={t(`footerLinks.${column}.title`)}
                  key={index}
                >
                  <ul>
                    {Object.keys(messages.Footer.footerLinks[column].links).map(
                      (link, index) => (
                        <li key={index}>
                          <Link
                            href={t(`footerLinks.${column}.links.${link}.href`)}
                            className="inline-block text-lg text-[#ccc] mb-[10px] hover:text-white"
                          >
                            {t(`footerLinks.${column}.links.${link}.label`)}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </FooterColumn>
              );
            })}

            <FooterColumn title={t("contactInfo.title")}>
              <ul className="flex flex-col gap-5  lg:gap-3">
                {contactInfoLinks.map((link, index) => {
                  return (
                    <li key={index}>
                      <div className="flex items-start gap-[2px]">
                        <span
                          className="transition-transition-1
                  mr-3  rounded-full bg-primary p-2 text-xl text-white
                 "
                        >
                          {icons[link]}
                        </span>
                        <div>
                          <span className="text-lg text-white font-medium lg:text-base">
                            {t(`contactInfo.links.${link}.label`)}
                          </span>
                          <p className="text-[#ccc] ">
                            {" "}
                            {t(`contactInfo.links.${link}.value`)}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </FooterColumn>
          </div>


          <div className="footer-bottom w-full  py-5  border-t-[1px] border-white/20 mt-3   flex flex-col  items-center justify-between gap-4 lg:flex-row lg:gap-0  ">
            <div className="flex  mt-3 md:mt-0 items-center  gap-5    xs:gap-5    md:gap-10">
              <Link
                href="/terms-and-conditions"
                className="cursor-pointer text-sm  text-[#eee] transition-all duration-200 hover:text-white hover:underline"
              >
                {t("termsAndConditions")}
              </Link>
              <Link
                href="/privacy-policy"
                className="cursor-pointer text-sm   text-[#eee] transition-all duration-200 hover:text-white hover:underline"
              >
                {t("privacyPolicy")}
              </Link>
            </div>

            <p className=" text-sm font-medium text-[#eee] ">
              {t("copyright")}
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;

const FooterColumn = ({ children, title }) => {
  return (
    <div className="sec quick-link relative">
      {title && (
        <h3
          className="relative text-white text-xl font-medium mb-3 lg:mb-5 after:content-['']  after:absolute after:left-0 
              after:top-7 after:h-[3px] after:w-[36px] after:rounded-3xl after:bg-primary   "
        >
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};
