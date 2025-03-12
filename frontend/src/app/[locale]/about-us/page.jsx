import Container from "@/components/Container";
import AboutHero from "./components/AboutHero";
import Mission from "./components/Mission";
import OurTeam from "./components/OurTeam";
import Vision from "./components/Vision";

const About = () => {
  return (
    <div className="relative isolate z-0 pb-10 md:pb-20">
      <div className="relative">
        <Container>
          <AboutHero />
        </Container>
        <div className="py-5 md:py-10  bg-[#111827]">
          <Container>
            <Mission />
          </Container>
        </div>
        <Container>
          <Vision />
          <OurTeam />
        </Container>
      </div>
    </div>
  );
};

export default About;
