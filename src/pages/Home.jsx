import AboutMain from "../components/About/AboutMain";
import Feature from "../components/Home/Feature";
import HeroSection from "../components/Home/HeroSection";
import Industries from "../components/Home/Industries";
import OurClients from "../components/Home/OurClients";
import OurTech from "../components/Home/OurTech";
import Testimonial from "../components/Home/Testimonial";
import ServiceMain from "../components/service/ServiceMain";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Feature />
      <AboutMain />
      <Industries />
      <ServiceMain />
      <Testimonial />
      <OurTech />
      <OurClients />
    </>
  );
}
