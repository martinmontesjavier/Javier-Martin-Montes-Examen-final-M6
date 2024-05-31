import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function Tarjeta({ id, nombre, edad, nivel_de_poder, imagen }) {
  const { setModalAbierto, setSelectedCharacter, fetchHistorias } = useContext(GlobalContext);

  const handleEditar = () => {
    setSelectedCharacter({ id, nombre, edad, nivel_de_poder, imagen });
    setModalAbierto(true);
  };

  const handleEliminar = async () => {
    try {
      const response = await fetch(`https://javier-martin-montes-api-examen-m6.vercel.app/personajes/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchHistorias();
      } else {
        console.error("Error al eliminar la historia");
      }
    } catch (error) {
      console.error("Error en la solicitud para eliminar la historia:", error);
    }
  };

  return (
    <div className="flex flex-grow-0">
      <div id={id} className="card" style={{ width: "18rem" }}>
        <img src={imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">Edad: {edad}</p>
          <p className="card-text">Nivel de poder: {nivel_de_poder}</p>
          <button onClick={handleEditar} className="btn btn-primary">Editar</button>
          <button onClick={handleEliminar} className="btn btn-danger mx-2">Eliminar</button>
        </div>
      </div>
    </div>
  );
}
