import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { TablaPendientes } from "../componentes/TablaPendientes";
import { TablaResueltos } from "../componentes/TablaResueltos";

export function Panel() {
  return (
    <div className="container mt-5">
      <h1>Administración de incidencias</h1>
      <h2 className="mt-5">Tickets pendientes</h2>
      <TablaPendientes />
      <h2 className="mt-5">Tickets resueltos</h2>
      <TablaResueltos />
    </div>
  );
}
