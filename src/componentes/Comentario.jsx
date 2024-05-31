import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function Comentario() {
  const { base, setBase} = useContext(GlobalContext);

  return (
    <div>
      <div className="card p-3 mt-2" >
        <h5 id="autor" className="text-end">{base.alumno}</h5>
        <p id="fecha">${base.fecha}</p>
        <p id="opinion">${opinion}</p>
      </div>
    </div>
  )
}
