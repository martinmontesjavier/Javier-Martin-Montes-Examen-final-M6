import { useContext, useState } from "react";
import { Tarjeta } from "../componentes/Card";
import { Tarjetas } from "../componentes/Cards";


export function Ejercicio1() {
    return (
        <div className="container mx-auto mt-8">
            <h1>Ejercicio 1</h1>
            <Tarjetas></Tarjetas>
        </div>
    );
}
