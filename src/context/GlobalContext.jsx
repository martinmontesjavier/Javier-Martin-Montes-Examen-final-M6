import { createContext, useEffect, useState } from "react";
import ticketsBD from "../bd/bd.json"

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  // const [basePendientes, setBasePendientes] = useState(ticketsBD.ticketsPendientes); 
  // const [baseResueltos, setBaseResueltos] = useState(ticketsBD.ticketsResueltos); 

  const [basePendientes, setBasePendientes] = useState([]); 
  const [baseResueltos, setBaseResueltos] = useState([]); 
  const [ticket, setTicket] = useState(null)

  const fetchPendientes = async () => {
    try {
      const response = await fetch("https://javier-martin-montes-api-examen-m6.vercel.app/ticketsPendientes");
      const data = await response.json();
      console.log("Data API con PENDIENTES:", data);  // Verifica la respuesta de la API
      setBasePendientes(data);
    } catch (error) {
      console.error("Error fetching PENDIENTES:", error);
    }
  };

  useEffect(() => {
    fetchPendientes();
  }, []);



  const fetchResueltos = async () => {
    try {
      const response = await fetch("https://javier-martin-montes-api-examen-m6.vercel.app/ticketsResueltos");
      const data = await response.json();
      console.log("Data API con RESUELTOS:", data);  // Verifica la respuesta de la API
      setBaseResueltos(data);
    } catch (error) {
      console.error("Error fetching RESUELTOS:", error);
    }
  };

  useEffect(() => {
    fetchResueltos();
  }, []);

  const [modalAbierto, setModalAbierto] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <GlobalContext.Provider value={{
      basePendientes, setBasePendientes,
      baseResueltos, setBaseResueltos,
      ticket, setTicket,
      modalAbierto, setModalAbierto,
      selectedCharacter, setSelectedCharacter,
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
