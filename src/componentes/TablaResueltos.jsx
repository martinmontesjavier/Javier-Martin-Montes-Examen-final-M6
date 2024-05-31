import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Button } from "react-bootstrap";
import { Trash2 } from "lucide-react";

export function TablaResueltos() {
  const { basePendientes, setBasePendientes } = useContext(GlobalContext);

  const controladorBorrar = async (id) => {
    try {
      const response = await fetch(`https://javier-martin-montes-api-examen-m6.vercel.app/ticketsResueltos${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log("Ticket RESUELTO eliminado exitosamente");
        // Actualizar el estado global eliminando el ticket borrado
        setBasePendientes(basePendientes.filter(ticket => ticket.id !== id));
      } else {
        console.error("Error al eliminar el ticket RESUELTO");
      }
    } catch (error) {
      console.error("Error en la solicitud para eliminar el ticket RESUELTO:", error);
    }
  };

  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>Id</th>
          <th>Código</th>
          <th>Fecha</th>
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
        {basePendientes.map((ticket) => (
          <tr key={ticket.id}>
            <td>{ticket.id}</td>
            <td>{ticket.codigo}</td>
            <td>{ticket.fecha}</td>
            <td>{ticket.aula}</td>
            <td>{ticket.grupo}</td>
            <td>{ticket.ordenador}</td>
            <td>{ticket.descripcion}</td>
            <td>{ticket.alumno}</td>
            <td><button className="btn btn-info" title="Ver comentarios"><i className="bi bi-chat-left-text"></i></button></td>
            <td>
              <Button onClick={() => controladorBorrar(ticket.id)} className="bg-danger" variant="ghost" radius="lg" size="sm">
                <Trash2 />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
