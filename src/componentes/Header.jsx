import { Link } from "react-router-dom";

export function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <p className="text-light fs-5">Javier Martín Montes</p>
                <div className="collapse navbar-collapse justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link fs-5 text-light" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5 text-light" to="/ejercicio1">Ejercicio 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5 text-light" to="/ejercicio2">Ejercicio 2</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
