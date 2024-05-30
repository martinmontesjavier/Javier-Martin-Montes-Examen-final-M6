import { Tarjeta } from "./Card";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function Tarjetas() {
    const { base, setBase } = useContext(GlobalContext);

    console.log('Contenido Base', base);

    return (
        <div className="d-flex flex-wrap justify-content-center mx-4">
            {base.map((personaje, index) => (
                <div key={index} className="m-3">
                    <Tarjeta 
                        id={index}
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
