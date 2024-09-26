import NavbarComponent from "../components/Navbar/Index";
import Empathize from "../components/section/empathize/Empathize";
import EmpathizeDemokration from "../components/section/empathize/EmpathizeDemokration";
import EmpathizeFamily from "../components/section/empathize/EmpathizeFamily";
import HeroBanner from "../components/section/HeroBanner";

const HomePages = () => {
  return (
    <>
      <NavbarComponent />
      <HeroBanner />
      <Empathize />
      <EmpathizeFamily />
      <EmpathizeDemokration />
    </>
  );
};

export default HomePages;
