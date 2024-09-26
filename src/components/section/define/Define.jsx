import { ImageHome } from "../../../assets/images/Index";
import usePropsDriling from "../../../hooks/usePropsDriling";
import Title from "../../elements/Title";
import LayoutsSection from "../../layouts/LayoutsSection";

const Define = () => {
    const {defineRef} = usePropsDriling()
  return (
    <LayoutsSection ref={defineRef}>
      <Title>Define / Menentukan</Title>
      <div className="flex items-center gap-10 text-primary">
        <div >
          <h3 className="text-lg">
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
        <div>
          <img src={ImageHome.define} alt="Menentukan " />
        </div>
      </div>
    </LayoutsSection>
  );
};

export default Define;
