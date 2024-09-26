import { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Thankyou from "../components/footer/Thankyou";
import NavbarComponent from "../components/Navbar/Index";
import Define from "../components/section/define/Define";
import DefineDecision from "../components/section/define/DefineDecision";
import DefineFamily from "../components/section/define/DefineFamily";
import Empathize from "../components/section/empathize/Empathize";
import EmpathizeDemokration from "../components/section/empathize/EmpathizeDemokration";
import EmpathizeFamily from "../components/section/empathize/EmpathizeFamily";
import HeroBanner from "../components/section/HeroBanner";
import Prototype from "../components/section/prototype/Prototype";
import PrototypeFamily from "../components/section/prototype/PrototypeFamily";
import PrototypeSolution from "../components/section/prototype/PrototypeSolution";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePages = () => {
  useEffect(() => {
    Aos.init({
      once: false,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <NavbarComponent />
      <HeroBanner />
      <Empathize />
      <EmpathizeFamily />
      <EmpathizeDemokration />
      <Define />
      <DefineFamily />
      <DefineDecision />
      <Prototype />
      <PrototypeFamily />
      <PrototypeSolution />
      <Thankyou />
      <Footer />
    </>
  );
};

export default HomePages;
