import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const PetDetail = () => {
  const { id } = useParams();
  const [pet, setPet] = useState({});
  const navigate = useNavigate();
  const [likes, setLikes] = useState(0);

  const [isLiked, setIsLiked] = useState(false);


  useEffect(() => {
    axios.get(`http://localhost:8000/api/pets/${id}`)
      .then(res => setPet(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const adoptPet = () => {
    axios.delete(`http://localhost:8000/api/pets/${id}`)
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  const likePet = () => {
    axios.put(`http://localhost:8000/api/pets/${id}/like`)
      .then(res => {
        setLikes(likes + 1);
        setIsLiked(true);
      })
      .catch(err => console.error(err));
  };
  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="pet-detail-container">
      <div className="grupo">
        <h1>Refugio de Mascotas</h1>
        <button className="back-button" onClick={goHome}>volver a inicio</button>
      </div>
      

      <div className="grupo">
        <h2>Detalles sobre: {pet.name}</h2>
        <button className="adopt-button" onClick={adoptPet}>Adoptar {pet.name}</button>
      </div>
      
      <div className="pet-detail">
        <p><strong>Tipo de mascota:</strong> {pet.type}</p>
        <p><strong>Raza:</strong> {pet.raza}</p>
        <p><strong>Edad:</strong> {pet.edad} años</p>
        <p><strong>Sexo:</strong> {pet.sexo}</p>
        <p><strong>Otros Datos:</strong> {pet.otrosDatos}</p>
      </div>
        <div className="grupo">
          <button className="like-button" onClick={likePet} disabled={isLiked}>Like {pet.name}</button>
          <p>{likes} like(s)</p>
        </div>
          </div>
  );
};

export default PetDetail;
