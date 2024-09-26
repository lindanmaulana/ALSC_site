import { ImageHome } from "../../../assets/images/Index";
import usePropsDriling from "../../../hooks/usePropsDriling";
import Title from "../../elements/Title";
import LayoutsSection from "../../layouts/LayoutsSection";

const Empathize = () => {
  const { empathizeRef } = usePropsDriling();
  return (
    <LayoutsSection ref={empathizeRef}>
      <Title>Empathize / Empati</Title>
      <div className="flex flex-col items-center gap-10 lg:flex-row text-primary ">
        <div className="lg:w-[40%]">
          <img src={ImageHome.empaty} alt="Empati" className="w-full h-full" />
          {/* <img src={ImageHome.diskusiAnakDanOrangtua} alt="Empati" /> */}
        </div>
        <div className="lg:w-[60%]">
          <h3 className="text-lg">
            <span className="font-semibold">Empati dalam keluarga adalah </span>
            kemampuan untuk memahami, merasakan, dan menanggapi kebutuhan dan
            penderitaan orang lain. Empati merupakan bagian dari perkembangan
            sosial emosional anak yang dapat membantu membangun dan
            mempertahankan hubungan yang sehat dan positif dengan orang lain.
          </h3>
        </div>
      </div>
    </LayoutsSection>
  );
};

export default Empathize;
