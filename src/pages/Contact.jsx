import HeroSection from "../components/sections/HeroSection";
import img from "../assets/service/software.svg";
import OurTech from "../components/Home/OurTech";
export default function Contact() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fuga, consectetur voluptas adipisci incidunt amet Nam."
        img={img}
      />
      <div>
        <h1 className="text-center py-14 font-bold">
          More Section update Soon...
        </h1>
      </div>
    </>
  );
}
