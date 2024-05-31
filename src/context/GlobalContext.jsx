import { createContext, useState } from "react";
import ticketsBD from "../bd/bd.json"

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [basePendientes, setBasePendientes] = useState(ticketsBD.ticketsPendientes); 
  const [baseResueltos, setBaseResueltos] = useState(ticketsBD.ticketsResueltos); 

  const [modalAbierto, setModalAbierto] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <GlobalContext.Provider value={{
      basePendientes, setBasePendientes,
      baseResueltos, setBaseResueltos,
      modalAbierto, setModalAbierto,
      selectedCharacter, setSelectedCharacter,
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
