import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function TablaResueltos() {
  const { baseResueltos } = useContext(GlobalContext);

  const controladorBorrar = async () => {
    try {
      const response = await fetch(`https://javier-martin-montes-api-examen-m6.vercel.app/ticketsResueltos${codigo}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log("Ticket RESUELTO eliminado exitosamente");
        await fetchHistorias(); // Actualiza el estado global con las historias más recientes
      } else {
        console.error("Error al eliminar ticket RESUELTO");
      }
    } catch (error) {
      console.error("Error en la solicitud para ticket RESUELTO:", error);
    }
  };

  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Fecha resuelto</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {baseResueltos.map((ticket) => (
          <tr key={ticket.codigo}>
            <td>{ticket.codigo}</td>
            <td>{ticket.fecha}</td>
            <td>{ticket.fechaResuelto}</td>
            <td>{ticket.aula}</td>
            <td>{ticket.grupo}</td>
            <td>{ticket.ordenador}</td>
            <td>{ticket.descripcion}</td>
            <td>{ticket.alumno}</td>
            <td><button className="btn btn-info" title="Ver comentarios"><i className="bi bi-chat-left-text"></i></button></td>
            <td><button className="btn btn-danger" title="Eliminar ticket"><i className="bi bi-trash3"></i></button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
