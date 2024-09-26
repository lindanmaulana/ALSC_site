import { ImageHome } from "../../../assets/images/Index";
import usePropsDriling from "../../../hooks/usePropsDriling";
import Title from "../../elements/Title";
import LayoutsSection from "../../layouts/LayoutsSection";

const Define = () => {
    const {defineRef} = usePropsDriling()
  return (
    <LayoutsSection ref={defineRef}>
      <Title>Define / Menentukan</Title>
      <div className="flex flex-col-reverse items-center gap-10 pt-10 lg:flex-row text-primary">
        <div data-aos="zoom-in-up">
          <h3 className="text-lg text-center lg:text-start">
            <span className="font-semibold">
              Pengambilan keputusan dalam keluarga merujuk
            </span>
            pada proses bersama dalam memilih tindakan atau solusi terbaik untuk
            masalah atau situasi yang dihadapi oleh keluarga. Ini melibatkan
            seluruh anggota keluarga, baik orang tua maupun anak-anak, dalam
            berpartisipasi aktif dalam diskusi, memberikan masukan, dan mencapai
            kesepakatan.
          </h3>
        </div>
        <div data-aos="fade-left">
          <img src={ImageHome.define} alt="Menentukan " />
        </div>
      </div>
    </LayoutsSection>
  );
};

export default Define;
