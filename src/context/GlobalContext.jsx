import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [base, setBase] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const fetchHistorias = async () => {
    try {
      const response = await fetch("https://javier-martin-montes-api-examen-m6.vercel.app/personajes");
      const data = await response.json();
      setBase(data);
    } catch (error) {
      console.error("Error fetching historias:", error);
    }
  };

  useEffect(() => {
    fetchHistorias();
  }, []);

  return (
    <GlobalContext.Provider value={{
      base, setBase,
      modalAbierto, setModalAbierto,
      selectedCharacter, setSelectedCharacter,
      fetchHistorias
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
