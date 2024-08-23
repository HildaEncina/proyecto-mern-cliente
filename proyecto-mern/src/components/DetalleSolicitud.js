import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../estilos/DetalleSolicitud.css';

const DetalleSolicitud = () => {
  const { id } = useParams(); // Obtener el ID de la solicitud desde la URL
    const [solicitud, setSolicitud] = useState(null);

    useEffect(() => {
        axios.get(`/api/solicitudes/${id}`)
        .then(res => {
            setSolicitud(res.data);
        })
        .catch(err => console.error(err));
    }, [id]);

    if (!solicitud) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="detalle-solicitud">
        <h1>Detalle de Solicitud</h1>
        <p><strong>Nombre:</strong> {solicitud.nombre}</p>
        <p><strong>Correo:</strong> {solicitud.correo}</p>
        <p><strong>Teléfono:</strong> {solicitud.telefono}</p>
        <p><strong>Mensaje:</strong> {solicitud.mensaje}</p>
        </div>
    );
};

export default DetalleSolicitud;
