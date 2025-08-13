import Container from "@/components/Container";
import Team from "../components/Team";
import Image from "next/image";
import { useTranslations } from "next-intl";
const About = () => {
   const t = useTranslations("Our Team"); // translation namespace for headings
  return (
    <div className="relative isolate z-0 pb-10 md:pb-20">
      {/* Hero Section */}
            <section className="relative h-72 md:h-[200px] overflow-hidden">
              <Image
                src="/payload-hero-banner.webp" // change to your actual banner image
                alt="About Company"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
                  {t("")} {/* e.g., "About Our Company" */}
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
