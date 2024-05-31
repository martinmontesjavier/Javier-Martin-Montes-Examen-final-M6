import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Comentario } from "./Comentario";

export function Comentarios() {
  const { base } = useContext(GlobalContext);

  return (
    <div className="d-flex flex-wrap justify-content-center mx-4">
      {base.map((comentario, index) => (
        <div key={index} className="m-3">
            <Comentario 
            key={index}// Add key prop here
            codigo={comentario.codigo}
            fecha={comentario.fecha}
            aula={comentario.aula}
            grupo={comentario.grupo}
            ordenador={comentario.ordenador}
            descripcion={comentario.descripcion}
            alumno={comentario.alumno}
            />
        </div>
      ))}
    </div>
  );
}
