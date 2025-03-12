import Container from "@/components/Container";
import { useTranslations } from "next-intl";
import React from "react";
import ContactAddress from "./components/ContactAddress";
import GetInTouch from "./components/GetInTouch";

const Contact = () => {
  const t = useTranslations("ContactPage");

  return (
    <>
      <Container>
        {/* Address */}
        <ContactAddress t={t} />

        <div className="w-full max-w-3xl mx-auto">
          <p
            className={` text-[#353535] pb-5 text-lg  leading text-center
            `}
          >
            {t("ConnectWithUs")}
          </p>
        </div>

        {/* Contact Form */}
        <GetInTouch t={t} />
      </Container>
    </>
  );
};

export default Contact;
