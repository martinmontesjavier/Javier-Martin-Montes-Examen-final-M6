import { createContext, useState, useEffect } from "react";
import dragonBall from "../bd/bd.json"

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
//   const [historias, setHistorias] = useState([]);
//   const [dataHistoria, setDataHistoria] = useState(null);
//   const [isCreatingNew, setIsCreatingNew] = useState(false);

 const [base, setBase] = useState([]);
 const [modalAbierto, setModalAbierto] = useState(false);
 const [selectedCharacter, setSelectedCharacter] = useState(null);

  const fetchHistorias = async () => {
    try {
      const response = await fetch("https://javier-martin-montes-api-examen-m6.vercel.app/personajes");
      const data = await response.json();
      console.log("Data API:", data);  // Verifica la respuesta de la API
      setBase(data);
    } catch (error) {
      console.error("Error fetching historias:", error);
    }
  };

  useEffect(() => {
    fetchHistorias();
  }, []);

  // const [base, setBase] = useState(dragonBall.personajes);

  return (
    <GlobalContext.Provider value={{
    //   historias, setHistorias,
    //   dataHistoria, setDataHistoria,
    //   isCreatingNew, setIsCreatingNew,
    //   fetchHistorias
      base, setBase,
      modalAbierto, setModalAbierto,
      selectedCharacter, setSelectedCharacter
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
