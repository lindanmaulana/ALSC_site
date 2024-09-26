import { useState } from "react";
import { useEffect } from "react";

const useScroll = () => {
  const [isScroll, setIsScroll] = useState(0);
  const handleScroll = () => {
    const Y = window.pageYOffset;

    setIsScroll(Y);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return isScroll;
};

export default useScroll;
