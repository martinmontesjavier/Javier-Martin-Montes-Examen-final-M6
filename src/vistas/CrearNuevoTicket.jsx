import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function VistaNuevoTicket() {
  const { ticket, setTicket } = useContext(GlobalContext);

  const [codigo, setCodigo] = useState("");
  const [fecha, setFecha] = useState("");
  const [aula, setAula] = useState("");
  const [grupo, setGrupo] = useState("");
  const [ordenador, setOrdenador] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [alumno, setAlumno] = useState("");

  const AnyadirTicket = async (e) => {+
    e.preventDefault()
    const nuevoTicket = { codigo, fecha, aula, grupo, ordenador, descripcion, alumno };
    setTicket(nuevoTicket)

    try {
      const response = await fetch('https://javier-martin-montes-api-examen-m6.vercel.app/ticketsPendientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ticket),
      });

      if (response.ok) {
        console.log("Nuevo ticket añadido exitosamente");
      } else {
        console.error("Error al añadir nuevo ticket");
      }
    } catch (error) {
      console.error("Error en la solicitud para añadir nuevo ticket:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={AnyadirTicket}>
        <div className="mb-3">
          <label htmlFor="codigo" className="form-label">Código</label>
          <input
            type="text"
            className="form-control"
            id="codigo"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">Fecha</label>
          <input
            type="date"
            className="form-control"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="aula" className="form-label">Aula</label>
          <input
            type="text"
            className="form-control"
            id="aula"
            value={aula}
            onChange={(e) => setAula(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="grupo" className="form-label">Grupo</label>
          <input
            type="text"
            className="form-control"
            id="grupo"
            value={grupo}
            onChange={(e) => setGrupo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ordenador" className="form-label">Ordenador</label>
          <input
            type="text"
            className="form-control"
            id="ordenador"
            value={ordenador}
            onChange={(e) => setOrdenador(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción</label>
          <textarea
            className="form-control"
            id="descripcion"
            rows="3"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="alumno" className="form-label">Alumno</label>
          <input
            type="text"
            className="form-control"
            id="alumno"
            value={alumno}
            onChange={(e) => setAlumno(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Crear Ticket</button>
      </form>
    </div>
  );
}
