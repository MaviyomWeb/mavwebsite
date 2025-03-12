import Container from "@/components/Container";
import PolicyDetails from "@/components/PolicyDetails";
import { useMessages, useTranslations } from "next-intl";

export const metadata = {
  title: "Terms-&-Conditions",
  robots: {
    index: false,
    follow: true,
  },
};

const TermsAndConditions = () => {
  const t = useTranslations("TermsAndConditionsPage");
  const messages = useMessages();

  const sections = Object.keys(messages.TermsAndConditionsPage.sections);

  return (
    <div className="relative isolate w-full z-0 bg-white font-roboto pt-5  pb-10 md:pb-20">
      <Container>
        <PolicyDetails
          title={t("title")}
          info={t("info")}
          sections={sections}
          t={t}
          messages={messages.TermsAndConditionsPage}
        />
      </Container>
    </div>
  );
};

export default TermsAndConditions;
