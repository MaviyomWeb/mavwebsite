import AboutCompany from "@/components/AboutCompany";
import Blogs from "@/components/Blogs";
import HeroBanner from "@/components/HeroBanner";
import OurProducts1 from "@/components/OurProducts1";
import Specs from "@/components/Specs";

export default function Home({ params }) {
  const { locale } = params;
  return (
    <>
      <HeroBanner />
      <OurProducts1 locale={locale} />
      <Specs />
      <AboutCompany />
      <Blogs locale={locale} />
    </>
  );
}
