import { ImageHome } from "../../../assets/images/Index";
import SubTitle from "../../elements/SubTitle";
import LayoutsSection from "../../layouts/LayoutsSection";

const DefineDecision = () => {
  return (
    <LayoutsSection>
      <SubTitle>Keputusan dalam Menentukan Jurusan</SubTitle>
      <div className="grid grid-cols-1 gap-10 mb-10 md:grid-cols-2">
        <div className>
          <ul className="flex flex-col gap-4 mb-14">
            <li data-aos="zoom-in-up" data-aos-duration="1100" className="px-5 py-2 text-sm rounded shadow-xl bg-primary text-fourth shadow-third/50">
              <span className="font-semibold">Pengambilan Keputusan:</span> dan
              Menentukan Jurusan / Prodi di Dunia Perkuliahan
            </li>
            <li data-aos="zoom-in-up" data-aos-duration="1300" className="px-5 py-2 text-sm leading-relaxed rounded shadow-xl bg-primary text-fourth shadow-third/50">
              <span className="font-semibold ">
                {" "}
                Pengambilan keputusan dalam menentukan jurusan atau Prodi di
                dunia perkuliahan Uraian:
              </span>{" "}
              Bagaimana menurut anda demokrasi bisa ditetapkan dalam pengambilan
              keputusan keluarga terkait masa depan anak Jawab: menurut saya
              demokrasi dalam keluarga diterapkan dengan menciptakan ruang
              diskusi yang terbuka dan seimbang antara orang tua dan anak kita
              bisa melakukan penerapan demokrasi ini dengan beberapa tahap yaitu
              pertama melakukan riset me    ngenai berbagai pilihan pendidikan dan
              karir pendapatannya, dan keputusan terakhir, yaitu pengambilan
              keputusan secara musyawarah, di sini itu sudah ada ya keputusan
              dan kesepakatan antara orang tua anak tanpa adanya paksaan
            </li>
          </ul>
        </div>
        <div className="" data-aos="fade-left">
          <img
            src={ImageHome.alsc2}
            alt="alsc1"
            className="shadow-xl rounded-xl shadow-primary/70 "
          />
        </div>{" "}
      </div>
      {/*  */}
      <div className="grid gap-10 mb-10 md:grid-cols-2">
        <div className="" data-aos="fade-right">
          <img
            src={ImageHome.alsc3}
            alt="alsc1"
            className="shadow-xl rounded-xl shadow-primary/70 "
          />
        </div>{" "}
        <div>
          <ul className="flex flex-col gap-4 mb-14">
            <li data-aos="zoom-in-up" data-aos-duration="1100" className="px-5 py-2 text-sm rounded shadow-xl bg-primary text-fourth shadow-third/50">
              <span className="font-semibold">Pengambilan Keputusan:</span> dan
              Menentukan Jurusan / Prodi di Dunia Perkuliahan
            </li>
            <li data-aos="zoom-in-up" data-aos-duration="1300" className="px-5 py-2 text-sm leading-relaxed rounded shadow-xl bg-primary text-fourth shadow-third/50">
              <span className="font-semibold">
                {" "}
                Apa yang menurut anda menjadi kendala terbesar dalam mencapai
                keputusan bersama antara orang tua dan anak Jawab:
              </span>{" "}
              adanya perbedaan Harapan di antara keduanya. Orang tua itu
              seringkali melihat masa depan anak dari sudut pandang pengalaman
              mereka, kekhawatiran akan finansial dan keinginan agar anak
              memiliki kehidupan yang aman. Jadi, Mereka cenderung memilih jalur
              yang sudah terbukti tapi di sisi lain sang anak memiliki pandangan
              berbeda seperti dipengaruhi oleh minat dan bakatnya atau mengejar
              karir yang sesuai dengan hobi yang kadang-kadang tidak sesuai
              dengan ekspektasi orang tua. Faktor lainnya adalah komunikasi yang
              kurang efektif karena terkadang orang tua dan anak tidak saling
              mendengarkan atau tidak memahami alasan dibalik pilihan
              masing-masing
            </li>
          </ul>
        </div>
      </div>
      {/*  */}
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <ul className="flex flex-col gap-4 mb-14">
            <li data-aos="zoom-in-up" data-aos-duration="1100" className="px-5 py-2 text-sm rounded shadow-xl bg-primary text-fourth shadow-third/50">
              <span className="font-semibold">Pengambilan Keputusan:</span> dan
              Menentukan Jurusan / Prodi di Dunia Perkuliahan
            </li>
            <li data-aos="zoom-in-up" data-aos-duration="1300" className="px-5 py-2 text-sm leading-relaxed rounded shadow-xl bg-primary text-fourth shadow-third/50">
              <span className="font-semibold ">
                {" "}
                Bagaimana cara mengatasi perbedaan pendapat antara orang tua dan
                anak dalam hal studi dan karir Jawab:
              </span>{" "}
              tentu dengan membangun komunikasi terbuka, mencari titik Tengah (
              kompromi) , melakukan penelitian bersama, dan tetap saling
              menghargai apapun keputusan yang diambil, serta harus terus
              mensupport
            </li>
            <li data-aos="zoom-in-up" data-aos-duration="1400" className="px-5 py-2 text-sm leading-relaxed rounded shadow-xl bg-primary text-fourth shadow-third/50">
              <span className="font-semibold ">
                {" "}
                kesadaran dalam diri kita masing masing terhadap pendapat orang
                lain itu penting adanya.
              </span>{" "}
              kesadaran dalam diri kita masing masing terhadap pendapat orang
              lain itu penting adanya. Kami juga selalu mempertimbangkan setiap
              jawaban jawaban yang muncul dalam hasil observasi ini sebagai
              acuan dalam menentukan kehidupan di hari-hari yang akan datang.
            </li>
          </ul>
        </div>
        <div className="" data-aos="fade-left">
          <img
            src={ImageHome.alsc4}
            alt="alsc1"
            className="shadow-xl rounded-xl shadow-primary/70 "
          />
        </div>{" "}
      </div>
        <h4 data-aos="zoom-in-up" data-aos-duration="1500" className="pt-10 text-3xl italic text-center text-transparent font-extrabo ld bg-clip-text bg-gradient-to-r from-sky-500 to-pink-600">
          Kelompok 4 P5 kelas na XI. A-1
        </h4>
    </LayoutsSection>
  );
};

export default DefineDecision;
