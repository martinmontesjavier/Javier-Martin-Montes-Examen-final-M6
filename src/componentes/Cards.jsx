import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Tarjeta } from "./Card";

export function Tarjetas() {
  const { base } = useContext(GlobalContext);

  return (
    <div className="d-flex flex-wrap justify-content-center mx-4">
      {base.map((personaje) => (
        <div key={personaje.id} className="m-3">
            <Tarjeta 
            key={personaje.id} // Add key prop here
            id={personaje.id}
            nombre={personaje.nombre}
            edad={personaje.edad}
            nivel_de_poder={personaje.nivel_de_poder}
            imagen={personaje.imagen}
            />
        </div>
      ))}
    </div>
  );
}
