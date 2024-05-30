import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
//   const [historias, setHistorias] = useState([]);
//   const [dataHistoria, setDataHistoria] = useState(null);
//   const [isCreatingNew, setIsCreatingNew] = useState(false);

//   const fetchHistorias = async () => {
//     try {
//       const response = await fetch("https://proyecto-historias-api.vercel.app/historias");
//       const data = await response.json();
//       console.log("Data API:", data);  // Verifica la respuesta de la API
//       setHistorias(data);
//     } catch (error) {
//       console.error("Error fetching historias:", error);
//     }
//   };

//   useEffect(() => {
//     fetchHistorias();
//   }, []);

  return (
    <GlobalContext.Provider value={{
    //   historias, setHistorias,
    //   dataHistoria, setDataHistoria,
    //   isCreatingNew, setIsCreatingNew,
    //   fetchHistorias
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
