import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export function Tarjeta({ id, nombre, edad, nivel_de_poder, imagen }) {
    const { base, setBase } = useContext(GlobalContext);

    console.log('Contenido Base', base);
    return (
        <div className="flex flex-grow-0">
            <div id={id} className="card" style={{ width: "18rem" }}>
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">Edad: {edad}</p>
                    <p className="card-text">Nivel de poder: {nivel_de_poder}</p>
                    <a to="#" className="btn btn-primary">Editar</a>
                    <a to="#" className="btn btn-danger  mx-2">Eliminar</a>
                </div>
            </div>
        </div>
    );
}