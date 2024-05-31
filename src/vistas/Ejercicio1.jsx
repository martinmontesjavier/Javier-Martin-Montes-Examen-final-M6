import { useContext, useState } from "react";
import { Tarjeta } from "../componentes/Card";
import { Tarjetas } from "../componentes/Cards";
import { MiModal } from "../componentes/MiModal";


export function Ejercicio1() {
    return (
        <div className="container mx-auto mt-8">
            <h1>Ejercicio 1</h1>
            <Tarjetas />
            <MiModal />
        </div>
    );
}
