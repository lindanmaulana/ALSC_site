import React from "react";
import { ImageHome } from "../../assets/images/Index";
import usePropsDriling from "../../hooks/usePropsDriling";
import { useCallback } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroBanner = () => {
  const { homeRef, empathizeRef } = usePropsDriling();
  const handlePropsDriling = useCallback((params) => {
    if (params && params.current) {
        console.log("ref-axist, scrolling")
      params.current.scrollIntoView({ behavior: "smooth" });
    } else {
        console.log(params, "invalid")
    }
  }, []);

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  
  return (
    <div
      ref={homeRef}
      className="relative overflow-hidden bg-center bg-no-repeat bg-cover mb-[50px]"
      style={{ backgroundImage: `url(${ImageHome.banner})` }}
    >
      <div className="absolute top-0 right-0 block w-full h-full bg-black/60"></div>
      <div className="container max-w-5xl py-20">
        <div  className="flex flex-col items-center justify-center w-full gap-5 h-96">
          <h2 data-aos="zoom-in" data-aos-duration="1200" className="z-10 text-xl font-bold text-center md:text-5xl lg:text-6xl text-fourth">
            Masa Depanku, Pilihan Bersama
          </h2>
          <p data-aos="zoom-in" data-aos-duration="1400" className="z-10 text-center text-fourth/80">
            Temukan jurusan kuliah yang tepat bersama keluarga.
          </p>
          <button data-aos="zoom-in" data-aos-duration="1500"
            onClick={() => handlePropsDriling(empathizeRef)}
            className="z-10 px-4 py-2 bg-primary/60 hover:bg-primary transition-global text-[#B6BBC4] rounded-lg hover:text-white"
          >
            Jelajahi Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
