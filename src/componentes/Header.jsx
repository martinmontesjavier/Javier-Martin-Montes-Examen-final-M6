import { Link } from "react-router-dom";

export function Header() {
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
                <div>
                    <button class="btn btn-secondary ms-2"> <Link className="nav-link fs-5 text-light" to="/">Panel</Link></button>
                    <button class="btn btn-secondary ms-2"> <Link className="nav-link fs-5 text-light" to="/login">Login</Link></button>
                    <button class="btn btn-secondary ms-2"> <Link className="nav-link fs-5 text-light" to="/registro">Registro</Link></button>
                    <button class="btn btn-secondary ms-2"> <Link className="nav-link fs-5 text-light" to="/nuevoTicket">Nuevo Ticket</Link></button>
                </div>
            <div>
                <span id="nombreUsuario" class="d-none"></span>
                <button id="cerrarSesion" class="d-none btn btn-secondary ms-2">CERRAR SESIÓN</button>
                </div>
            </div>
        </nav>
    );
}
