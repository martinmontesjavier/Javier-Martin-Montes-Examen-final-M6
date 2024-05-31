import React from "react";
import { Tarjetas } from "../componentes/Cards";
import { MiModal } from "../componentes/MiModal";
import { GlobalContext } from "../context/GlobalContext";
import { createContext, useState, useEffect, useContext } from "react";

export function Ejercicio1() {
    const { setModalAbierto, setSelectedCharacter, fetchHistorias, selectedCharacter } = useContext(GlobalContext);

    return (
            <div className="container mx-auto mt-8">
                <h1>Ejercicio 1</h1>
                <Tarjetas />
                <MiModal id={selectedCharacter.id} />
            </div>
    );
}
