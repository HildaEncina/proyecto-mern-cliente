import {React, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import PerfilRescatista from './views/PerfilRescatista';
import AgregarMascota from './views/AgregarMascota';
import EditarMascota from './views/EditarMascota';
import PerfilMascota from './views/PerfilMascota';
import FormularioLogin from './components/ForlumarioLogin';
import FormularioRegistro from './components/FormularioRegistro.jsx';
import './App.css';


function App() {
  const [loginValido, setLoginValido] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<FormularioLogin />}></Route>
        <Route path="/" element={<PerfilRescatista />} />
        <Route path="/pets/new" element={<AgregarMascota />} />
        <Route path="/pets/:id/edit" element={<EditarMascota />} />
        <Route path="/pets/:id" element={<PerfilMascota />} />
        <Route path="/registro" element={<FormularioRegistro />}></Route>
      </Routes>
    </div>
  );
}

export default App;
