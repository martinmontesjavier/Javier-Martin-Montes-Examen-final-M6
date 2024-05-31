import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Modal, Button, Form } from 'react-bootstrap';

export function MiModal() {
    const { modalAbierto, setModalAbierto, base, setBase, selectedCharacter } = useContext(GlobalContext);
    const [nombreLocal, setNombreLocal] = useState('');
    const [edadLocal, setEdadLocal] = useState('');
    const [nivelPoder, setNivelPoder] = useState('');
    const [imagenLocal, setImagenLocal] = useState('');

    useEffect(() => {
        if (selectedCharacter) {
            setNombreLocal(selectedCharacter.nombre || '');
            setEdadLocal(selectedCharacter.edad || '');
            setNivelPoder(selectedCharacter.nivel_de_poder || '');
            setImagenLocal(selectedCharacter.imagen || '');
        }
    }, [selectedCharacter]);

    const handleSaveChanges = () => {
        const updatedCharacter = { nombre: nombreLocal, edad: edadLocal, nivel_de_poder: nivelPoder, imagen: imagenLocal };
        const updatedBase = base.map(char => (char.nombre === selectedCharacter.nombre ? updatedCharacter : char));
        setBase(updatedBase);
        handleCloseModal();
    };

    const handleCloseModal = () => {
        setModalAbierto(false);
    };

    return (
        <Modal show={modalAbierto} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Character</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            value={nombreLocal}
                            onChange={(e) => setNombreLocal(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control
                            type="number"
                            value={edadLocal}
                            onChange={(e) => setEdadLocal(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Nivel de Poder</Form.Label>
                        <Form.Control
                            type="text"
                            value={nivelPoder}
                            onChange={(e) => setNivelPoder(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Imagen URL</Form.Label>
                        <Form.Control
                            type="text"
                            value={imagenLocal}
                            onChange={(e) => setImagenLocal(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
                <Button variant="primary" onClick={handleSaveChanges}>Guardar Cambios</Button>
            </Modal.Footer>
        </Modal>
    );
}
