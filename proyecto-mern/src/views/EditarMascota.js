// views/EditPet.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import PetForm from '../components/FormularioMascota';

const EditarMascota = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [errors, setErrors] = useState({});


  useEffect(() => {
    axios.get(`http://localhost:8000/api/pets/${id}`)
      .then(res => setPet(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const updatePet = pet => {
    axios.put(`http://localhost:8000/api/pets/${id}`, pet)
      .then(res => navigate(`/pets/${id}`))
      .catch(err => setErrors(err.response.data.errors)); // Capturar errores y establecer en el estado
  };

  if (!pet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-pet-container">
      <h1>Refugio de Mascotas</h1>
      <h2>Editar {pet.name}</h2>
      <PetForm 
        initialName={pet.name}
        initialType={pet.type}
        initialRaza={pet.raza}
        initialSexo={pet.sexo}
        initialEdad={pet.edad}
        initialOtrosDatos={pet.otrosDatos}	
        initialEnAdopcion={pet.enAdopcion}
        onSubmitProp={updatePet} 
        errors={errors}
      />
    </div>
  );
};

export default EditarMascota;
