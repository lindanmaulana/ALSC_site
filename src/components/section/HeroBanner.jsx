import React from "react";
import { ImageHome } from "../../assets/images/Index";

const HeroBanner = () => {
  return (
    <div
      className="relative bg-center bg-no-repeat bg-cover mb-[50px]"
      style={{ backgroundImage: `url(${ImageHome.banner})` }}
    >
      <div className="absolute top-0 right-0 block w-full h-full bg-black/60"></div>
      <div className="container max-w-5xl py-20">
        <div className="flex flex-col items-center justify-center w-full gap-5 h-96">
          <h2 className="z-10 text-6xl font-bold text-fourth">Masa Depanku, Pilihan Bersama</h2>
          <p className="z-10 text-fourth/80">Temukan jurusan kuliah yang tepat bersama keluarga.</p>
          <button className="z-10 px-4 py-2 bg-primary/60 hover:bg-primary transition-global text-[#B6BBC4] rounded-lg hover:text-white">Jelajahi Sekarang</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
