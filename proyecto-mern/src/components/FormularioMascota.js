// components/FormularioMascota.js

import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const FormularioMascota = ({ initialNombre = '', initialTipo = '', initialRaza = '', initialSexo = '', initialEdad = '', initialSelectedfile='', initialOtrosDatos = '', initialEnAdopcion =  false, onSubmitProp, errors }) => {
  const [nombre, setNombre] = useState(initialNombre);
  const [tipo, setTipo] = useState(initialTipo);
  const [raza, setRaza] = useState(initialRaza);
  const [sexo, setSexo] = useState(initialSexo);
  const [edad, setEdad] = useState(initialEdad);
  const [selectedFile, setSelectedFile] = useState(initialSelectedfile);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [otrosDatos, setOtrosDatos] = useState(initialOtrosDatos);
  const [enAdopcion, setEnAdopcion] = useState(initialEnAdopcion);
    
    const navigate = useNavigate();
  const addmascota = e => {
    e.preventDefault();
  
    onSubmitProp({ nombre, tipo, raza, sexo,edad, selectedFile, otrosDatos, enAdopcion });
   
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result); //antes de confirmar muestra la imagen*/
      };
      reader.readAsDataURL(file);
    }
  };
  const goHome = () => {
    navigate('/');
  };


  return (
 
    <form onSubmit={addmascota}>
      <div className="form-group">
        <label>Nombre :</label><br />
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        {errors.nombre && <span className="error">{errors.nombre.message}</span>} {/* Mostrar mensaje de error */}
      </div>
      <div className="form-group">
        <label>Tipo </label><br />
        <select
        value={tipo} onChange={(e) => setTipo(e.target.value)}>
        {errors.tipo && <span className="error">{errors.tipo.message}</span>} {/* Mostrar mensaje de error */}
        <option value="">Seleccione el tipo</option>
          <option value="dog">Perro</option>
          <option value="cat">Gato</option>
        </select>
      </div>
      <div className="form-group">
        <label>Raza:</label><br />
        <input type="text" value={raza} onChange={(e) => setRaza(e.target.value)} />
        {errors.raza && <span className="error">{errors.raza.message}</span>} {/* Mostrar mensaje de error */}
      </div>
      <div className="form-group">
      <label>sexo</label><br/>
        <select
        value={sexo} onChange={(e) => setSexo(e.target.value)}>
          {errors.sexo && <span className="error">{errors.sexo.message}</span>} {/* Mostrar mensaje de error */}
        <option value="">seleccionar</option>
          <option value="hembra">Hembra</option>
          <option value="macho">Macho</option>
        </select>
      </div>
      <div className="form-group">
        <label>edad(meses):</label><br />
        <input type="text" value={edad} onChange={(e) => setEdad(e.target.value)} />
        {errors.edad && <span className="error">{errors.edad.message}</span>} {/* Mostrar mensaje de error */}
      </div>
      <div className='form-group'>
        <label>Foto de la mascota:</label><br/>
        <input
          type="file"
          id="petPhoto"
          accept="image/*"
          onChange={handleFileChange}
          required/>
      </div>
      {imagePreviewUrl && (
        <div>
          <img 
            src={imagePreviewUrl} 
            alt="Image preview" 
            style={{ marginTop: '10px', maxWidth: '10%', height: 'auto' }} 
          />
        </div>
      )}
      
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
    </form>
  );
};
export default FormularioMascota;