// views/Dashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PetList from '../components/PetList';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/pets')
      .then(res => setPets(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Rescatista de mascotas</h1>
      <h2>Mi informacion</h2>
      <p>Nombre:</p>
      <p>Apellido:</p>
      <p>Telefono:</p>
      <p>Ciudad:</p>
      <h2>Mis mascotas</h2>
      <Link to="/pets/new">Agregar una mascota al refugio</Link>
      <PetList pets={pets} />
    </div>
  );
};

export default Dashboard;
