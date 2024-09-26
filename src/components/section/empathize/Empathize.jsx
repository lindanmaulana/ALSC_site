import { ImageHome } from "../../../assets/images/Index";

const Empathize = () => {
  return (
    <div className="py-[50px]">
      <div className="container max-w-5xl">
        <h2 className="text-2xl font-bold text-primary">Empathize / Empati</h2>
        <div className="flex items-center gap-10 text-primary ">
          <div className="w-[40%]">
            <img
              src={ImageHome.empaty}
              alt="Empati"
              className="w-full h-full"
            />
            {/* <img src={ImageHome.diskusiAnakDanOrangtua} alt="Empati" /> */}
          </div>
          <div className="w-[60%]">
            <h3 className="text-lg">
              <span className="font-semibold">
                Empati dalam keluarga adalah{" "}
              </span>
              kemampuan untuk memahami, merasakan, dan menanggapi kebutuhan dan
              penderitaan orang lain. Empati merupakan bagian dari perkembangan
              sosial emosional anak yang dapat membantu membangun dan
              mempertahankan hubungan yang sehat dan positif dengan orang lain.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empathize;
