import Container from "@/components/Container";
import Team from "../components/Team";
import Image from "next/image";
import { useTranslations } from "next-intl";
const About = () => {
   const t = useTranslations("AboutPage");
  const mainHeading = t("heading"); // Resolves "Our Team" or "हमारी टीम"
  return (
    <div className="relative isolate z-0 pb-5 md:pb-10">
      {/* Hero Section */}
            <section className="relative h-[150px] md:h-[200px] overflow-hidden">
              <Image
                src="/payload-hero-banner.webp" 
                alt="About Company"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h2 className="text-white text-[30px] leading-[35px] sm:text-[60px] sm:leading-[65px] font-bold text-center">
                  {mainHeading}
                </h2>
              </div>
            </section>
      <div className="relative">
        <div className="py-5 md:py-20"> 
          <Container>
            <Team/>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default About;
