import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { MiModal } from "./MiModal";

export function Tarjeta({ id, nombre, edad, nivel_de_poder, imagen }) {
    const { setModalAbierto, setSelectedCharacter } = useContext(GlobalContext);

    const handleEditar = () => {
        console.log("Editando", nombre);
        setSelectedCharacter({ nombre, edad, nivel_de_poder, imagen });
        setModalAbierto(true);
    };

    const handleEliminar = () => {
        console.log("Eliminando", nombre);
        // Logic to delete the character
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
