import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';


export function MiModal({ nombre, edad, nivel_de_poder }) {
    const { modalAbierto, setModalAbierto } = useContext(GlobalContext);
    const [accion, setAccion] = useState('guardar');
    const [nombreLocal, setNombre] = useState(nombre || '');
    const [edadLocal, setEdad] = useState(edad || '');
    const [nivelPoder, setNivelPoder] = useState(nivel_de_poder || '');

    useEffect(() => {
        if (modalAbierto) {
            setAccion('editar');
        } else {
            setAccion('guardar');
            setNombre('');
            setEdad('');
            setNivelPoder('');
        }
    }, [modalAbierto]);

    const handleGuardarCambios = () => {
        console.log('Guardando cambios...');
        // Lógica para guardar los cambios
        // Actualizar el personaje en el estado global
        handleCloseModal();
    };

    const handleEditarCambios = () => {
        console.log('Editando cambios...');
        // Lógica para editar los cambios
        // Actualizar el personaje en el estado global
        handleCloseModal();
    };

    const handleCloseModal = () => {
        setModalAbierto(false);
    };

    return (
        <div className={`modal fade ${modalAbierto ? 'show d-block' : ''}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!modalAbierto} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{accion === 'guardar' ? 'Nuevo personaje' : 'Editar personaje'}</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" value={nombreLocal} onChange={(e) => setNombre(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="edad" className="form-label">Edad</label>
                                <input type="number" className="form-control" id="edad" value={edadLocal} onChange={(e) => setEdad(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nivelPoder" className="form-label">Nivel de Poder</label>
                                <input type="number" className="form-control" id="nivelPoder" value={nivelPoder} onChange={(e) => setNivelPoder(e.target.value)} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
                        <button type="button" className="btn btn-primary" onClick={accion === 'guardar' ? handleGuardarCambios : handleEditarCambios}>
                            {accion === 'guardar' ? 'Guardar' : 'Editar'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
