import { useContext, useState } from "react";

export function Registro() {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="mt-5 text-center">Registro</h1>
            <div className="m-5 mx-auto" style={{ maxWidth: '400px' }}>
                <form action="" className="form border shadow-sm p-3">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input name="nombre" id="nombre" type="text" className="form-control" />
                    
                    <label htmlFor="apellidos" className="form-label">Apellidos:</label>
                    <input id="apellidos" type="text" className="form-control" />
                    
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input name="email" id="email" type="text" className="form-control" />
                    
                    <label htmlFor="pass" className="form-label mt-3">Contraseña:</label>
                    <input name="pass" id="pass" type="password" className="form-control" />
                    
                    <label htmlFor="rol" className="form-label mt-3">Rol:</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="rol" id="usuario" value="usuario" />
                        <label className="form-check-label" htmlFor="usuario">Usuario</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="rol" id="profesor" value="profesor" />
                        <label className="form-check-label" htmlFor="profesor">Profesor</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="rol" id="administrador" value="administrador" />
                        <label className="form-check-label" htmlFor="administrador">Administrador</label>
                    </div>
                    <button id="enviar" className="btn btn-primary w-100 mt-3" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}
