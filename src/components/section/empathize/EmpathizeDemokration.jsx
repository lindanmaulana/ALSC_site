import { ImageHome } from "../../../assets/images/Index";

const EmpathizeDemokration = () => {
  return (
    <div className="py-[50px]">
      <div className="container max-w-5xl">
        <h3 className="relative mb-10 text-xl font-semibold text-secondary group">
          Demokrasi dalam Keluarga{" "}
          <span className="absolute -bottom-2 left-0 transition-global group-hover:w-20 block w-10 h-[2px] bg-primary"></span>
        </h3>
        <div className="grid grid-cols-2 gap-10">
          <div className="">
            <img
              src={ImageHome.alsc1}
              alt="alsc1"
              className="shadow-xl rounded-xl shadow-primary/70 "
            />
          </div>{" "}
          <div>
            <ul className="flex flex-col gap-4 mb-14">
              <li className="px-5 py-2 text-sm rounded shadow-xl bg-primary text-fourth shadow-third/50">
                <span className="font-semibold">Demokrasi dalam Keluarga:</span>{" "}
                diskusi orang tua anak dalam menentukan pilihan studi atau
                profesi masa depan
              </li>
              <li className="px-5 py-2 text-sm rounded shadow-xl bg-primary text-fourth shadow-third/50">
                <span className="font-semibold">
                  {" "}
                  Alasan yang paling mendasar:
                </span>{" "}
                adalah karena seorang anaklah yang akan menjalani kehidupan itu,
                dialah yang akan merasakan pahit manisnya keputusan yang telah
                diambil. Dan demokrasi dalam keluarga membantu memperkuat
                identitas dan harga diri anak karena mereka merasa dihargai
                didukung dan didengarkan. Demokrasi ini juga membantu
                menghindari situasi di mana anak merasa terbebani oleh harapan
                yang tidak sesuai dengan keinginan mereka.
              </li>
            </ul>
            <h4 className="text-3xl italic text-center text-transparent font-extrabo ld bg-clip-text bg-gradient-to-r from-sky-500 to-pink-600">
              Kelompok 4 P5 kelas na XI. A-1
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpathizeDemokration;
