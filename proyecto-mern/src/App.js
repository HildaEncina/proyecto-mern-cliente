import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PerfilRescatista from './views/PerfilRescatista';
import EditarMascota from './views/EditarMascota';
import AgregarMascota from './views/AgregarMascota';
import PerfilMascota from './views/PerfilMascota';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PerfilRescatista />} />
        <Route path="/pets/new" element={<AgregarMascota />} />
        <Route path="/pets/:id/edit" element={<EditarMascota />} />
        <Route path="/pets/:id" element={<PerfilMascota/>} />
      </Routes>
    </div>
  );
}

export default App;
