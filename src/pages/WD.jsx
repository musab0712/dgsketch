import HeroSection from "../components/sections/HeroSection";
import Feature from "../components/Home/Feature";
import ServiceMain from "../components/service/ServiceMain";
import wd from "../assets/img/ecommerce.svg";
export default function WD() {
  return (
    <>
      <HeroSection
        title="Web Developement"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fuga, consectetur voluptas adipisci incidunt amet Nam."
        img={wd}
      />
      <Feature />
      <ServiceMain />
    </>
  );
}
