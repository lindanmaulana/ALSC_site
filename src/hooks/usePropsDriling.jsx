import { useContext } from "react";
import { PropsDriling } from "../context/PropsDriling";

const usePropsDriling = () => {
  return useContext(PropsDriling);
};

export default usePropsDriling;
