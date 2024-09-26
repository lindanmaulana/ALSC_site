import { useRef } from "react";
import { createContext } from "react";

const PropsDrilingContext = createContext(null);
const PropsDrilingContextProvider = ({ children }) => {
  const homeRef = useRef(null);
  const empathizeRef = useRef(null);
  const defineRef = useRef(null);
  const prototypeRef = useRef(null);

  return (
    <PropsDrilingContext.Provider
      value={{ homeRef, empathizeRef, defineRef, prototypeRef }}
    >
      {children}
    </PropsDrilingContext.Provider>
  );
};

export const PropsDriling = PropsDrilingContext;
export default PropsDrilingContextProvider;
