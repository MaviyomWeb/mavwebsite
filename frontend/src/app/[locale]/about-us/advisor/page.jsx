import Container from "@/components/Container";
import OurTeam from "../components/Advisor";
import Image from "next/image";
import { useTranslations } from "next-intl";
const About = () => {
   const t = useTranslations("Our Team"); // translation namespace for headings
  return (
    <div className="relative isolate z-0 pb-10 md:pb-20">
      {/* Hero Section */}
            <section className="relative h-[150px] md:h-[200px] overflow-hidden">
              <Image
                src="/payload-hero-banner.webp" // change to your actual banner image
                alt="About Company"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h2 className="text-white text-[30px] leading-[35px] sm:text-[60px] sm:leading-[65px] font-bold text-center">
                  {t("")} {/* e.g., "About Our Company" */}
                </h2>
              </div>
            </section>
      <div className="relative">
        <div className="py-5 md:py-20"> 
          <Container>
            <OurTeam/>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default About;
