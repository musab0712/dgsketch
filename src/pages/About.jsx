import HeroSection from "../components/sections/HeroSection";
import AboutMain from "../components/About/AboutMain";
import about from "../assets/img/ai.svg";
import Feature from "../components/Home/Feature";
import OurClients from "../components/Home/OurClients";
import OurTech from "../components/Home/OurTech";

export default function About() {
  return (
    <>
      <HeroSection
        title="About Us"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fuga, consectetur voluptas adipisci incidunt amet Nam."
        img={about}
      />
      <Feature />
      <AboutMain />
      <OurClients />
      <OurTech />
    </>
  );
}
