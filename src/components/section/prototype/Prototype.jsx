import { ImageHome } from "../../../assets/images/Index";
import usePropsDriling from "../../../hooks/usePropsDriling";
import Title from "../../elements/Title";
import LayoutsSection from "../../layouts/LayoutsSection";

const Prototype = () => {
  const { prototypeRef } = usePropsDriling();
  return (
    <LayoutsSection ref={prototypeRef}>
      <Title>Prototype / Model Awal</Title>

      <div className="flex flex-col items-center gap-10 lg:flex-row text-primary ">
        <div className="lg:w-[40%]" data-aos="fade-right">
          <img
            src={ImageHome.prototype}
            alt="Empati"
            className="w-full h-full"
          />
          {/* <img src={ImageHome.diskusiAnakDanOrangtua} alt="Empati" /> */}
        </div>
        <div className="lg:w-[60%]" data-aos="zoom-in-up">
          <h3 className="text-lg text-center lg:text-start">
            <span className="font-semibold">
              Kemampuan untuk merancang, menguji, dan mengevaluasi ide atau
              solusi.
            </span>
            {/*  */}
            Prototipe merupakan bagian penting dari perkembangan kreativitas dan
            pemecahan masalah anak, yang dapat membantu mereka belajar mengambil
            keputusan dan menemukan cara yang paling efektif untuk menghadapi
            tantangan. Dengan mencoba berbagai prototipe, anak-anak belajar
            melihat konsekuensi dari tindakan mereka, memungkinkan mereka
            membangun keterampilan berpikir kritis dan inovatif yang bermanfaat
            dalam hubungan serta situasi kehidupan nyata.
          </h3>
        </div>
      </div>
    </LayoutsSection>
  );
};

export default Prototype;
