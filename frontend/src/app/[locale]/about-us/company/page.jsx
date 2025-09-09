import Container from "@/components/Container";
import AboutHero from "../components/AboutHero";
const About = () => {
  return (
    <div className="relative isolate z-0 pt-5 md:pt-8 pb-10 md:pb-20">
      <div className="relative">
        <Container>
          <AboutHero />
        </Container>
      </div>
    </div>
  );
};

export default About;
