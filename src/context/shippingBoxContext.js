import { createContext, useEffect } from "react";
import { getBoxesFromDB } from "../services/service";

export const ShippingBoxContext = createContext();

export const ShippingBoxContextProvider = ({ children }) => {
  const [boxes, setBoxes] = useState([]);
  useEffect(() => {
    const boxesFromDB = getBoxesFromDB();
    setBoxes(boxesFromDB);
  }, []);
  const addBox = (box) => {
    setBoxes((prevBoxes) => [...prevBoxes, box]);
  };
  return (
    <ShippingBoxContext.Provider value={{ boxes, addBox }}>
      {children}
    </ShippingBoxContext.Provider>
  );
};
