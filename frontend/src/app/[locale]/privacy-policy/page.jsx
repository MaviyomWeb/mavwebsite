import Container from "@/components/Container";
import PolicyDetails from "@/components/PolicyDetails";
import { useMessages, useTranslations } from "next-intl";

export const metadata = {
  title: "Privacy-Policy",
  robots: {
    index: false,
    follow: true,
  },
};

const Privacy = () => {
  const t = useTranslations("PrivacyPolicyPage");
  const messages = useMessages();

  const sections = Object.keys(messages.PrivacyPolicyPage.sections);

  return (
    <div className="relative isolate w-full z-0 bg-white font-roboto  pt-5   pb-10 md:pb-20">
      <Container>
        <PolicyDetails
          title={t("title")}
          info={t("info")}
          sections={sections}
          t={t}
          messages={messages.PrivacyPolicyPage}
        />
      </Container>
    </div>
  );
};

export default Privacy;
