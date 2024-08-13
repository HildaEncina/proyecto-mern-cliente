// components/PetForm.js

import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const PetForm = ({ initialName = '', initialType = '', initialRaza = '', initialSexo = '', initialEdad = '', initialOtrosDatos = '', initialEnAdopcion = {enAdopcion: false}, onSubmitProp, errors }) => {
  const [name, setName] = useState(initialName);
  const [type, setType] = useState(initialType);
  const [raza, setRaza] = useState(initialRaza);
  const [sexo, setSexo] = useState(initialSexo);
  const [edad, setEdad] = useState(initialEdad);
  const [otrosDatos, setOtrosDatos] = useState(initialOtrosDatos);
    const [enAdopcion, setEnAdopcion] = useState(initialEnAdopcion.enAdopcion || false);
    const navigate = useNavigate();
  const addmascota = e => {
    e.preventDefault();
    onSubmitProp({ name, type, raza, sexo,edad, otrosDatos, enAdopcion });
   
  };

  const goHome = () => {
    navigate('/');
  };


  return (
    <form onSubmit={addmascota}>
      <div className="form-group">
        <label>Nombre de la Mascota:</label><br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <span className="error">{errors.name.message}</span>} {/* Mostrar mensaje de error */}
      </div>
      <div className="form-group">
        <label>Tipo de Mascota:</label><br />
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
        {errors.type && <span className="error">{errors.type.message}</span>} {/* Mostrar mensaje de error */}
      </div>
      <div className="form-group">
        <label>Raza:</label><br />
        <input type="text" value={raza} onChange={(e) => setRaza(e.target.value)} />
        {errors.raza && <span className="error">{errors.raza.message}</span>} {/* Mostrar mensaje de error */}
      </div>
      <div className="form-group">
        <label>sexo:</label><br />
        <input type="text" value={sexo} onChange={(e) => setSexo(e.target.value)} />
        {errors.sexo && <span className="error">{errors.sexo.message}</span>} {/* Mostrar mensaje de error */}
      </div>
      <div className="form-group">
        <label>edad(meses):</label><br />
        <input type="text" value={edad} onChange={(e) => setEdad(e.target.value)} />
        {errors.edad && <span className="error">{errors.edad.message}</span>} {/* Mostrar mensaje de error */}
      </div>
      <div className="form-group">
        <label>otros datos:</label><br />
        <input type="text" value={otrosDatos} onChange={(e) => setOtrosDatos(e.target.value)} />
        {errors.otrosDatos && <span className="error">{errors.otrosDatos.message}</span>} {/* Mostrar mensaje de error */}
      </div>

      <div className="form-group">
        <label>Poner en Adopción:</label>
        <input
          type="checkbox"
         checked={enAdopcion}
           onChange={(e) => setEnAdopcion(e.target.checked)}
        />
      </div>
      <button className="btn-save" onClick={addmascota}>Guardar</button>
      <button type="button" className="btn-home" onClick={goHome}>Ir al inicio</button>
      
    </form>
  );
};
export default PetForm;