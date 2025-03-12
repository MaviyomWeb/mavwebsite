import { useTranslations } from "next-intl";
import Link from "next/link";

const TouchButton = () => {
  const t = useTranslations("Header");
  return (
    <Link
      href="/contact-us"
      className="inline-flex whitespace-nowrap text-white bg-secondary  font-medium px-6 py-[10px] rounded-3xl hover:opacity-90 active:opacity-90"
    >
      {t("getInTouch")}
    </Link>
  );
};

export default TouchButton;
