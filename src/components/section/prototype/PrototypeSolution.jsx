import { ImageHome } from "../../../assets/images/Index";
import LayoutsSection from "../../layouts/LayoutsSection";

const PrototypeSolution = () => {
  return (
    <LayoutsSection>
      <h3 className="relative mb-10 text-xl font-semibold text-secondary group">
        Solusi dan Tanggapan
        <span className="absolute -bottom-2 left-0 transition-global group-hover:w-20 block w-10 h-[2px] bg-primary"></span>
      </h3>
      <div className="grid grid-cols-2 gap-10">
        <div className="">
          <img
            src={ImageHome.alsc5}
            alt="alsc1"
            className="shadow-xl rounded-xl shadow-primary/70 "
          />
        </div>{" "}
        <div>
          <ul className="flex flex-col gap-4 mb-14">
            <li className="px-5 py-2 text-sm rounded shadow-xl bg-primary text-fourth shadow-third/50">
              <span className="font-semibold">
                Berilah solusi dan tanggapan terhadap masalah yang dipilih dan
                kaitkan dengan teori demokrasi yang kamu pahami!
              </span>{" "}
            </li>
            <li className="px-5 py-2 text-sm rounded shadow-xl bg-primary text-fourth shadow-third/50">
              <span className="font-semibold"> solusi:</span> Sama halnya dengan
              yang telah dijawab oleh narasumber, kita harus selalu
              berkomunikasi dengan orang tua, karena ketika kita berdemokrasi
              untuk mencari solusi, di situlah kita sedang berdemokrasi dan
              Jangan memaksakan kehendak Yang ada hanya untuk keuntungan pribadi
            </li>
            <li className="px-5 py-2 text-sm rounded shadow-xl bg-primary text-fourth shadow-third/50">
              <span className="font-semibold"> tanggapan:</span> Dukungan
              support dan motivasi terkait masa depan sangatlah menentukan bagi
              kehidupan kita selanjutnya. Jangan sampai kita berada di posisi
              kita tertekan atas keputusan yang telah diambil oleh karena adanya
              demokrasi masa depan yang berkaitan dengan pendidikan atau profesi
              pasti akan selalu mengiringi terhadap hasil yang dinanti-nanti
            </li>
          </ul>
          <h4 className="text-3xl italic text-center text-transparent font-extrabo ld bg-clip-text bg-gradient-to-r from-sky-500 to-pink-600">
            Kelompok 4 P5 kelas na XI. A-1
          </h4>
        </div>
      </div>
    </LayoutsSection>
  );
};

export default PrototypeSolution;
