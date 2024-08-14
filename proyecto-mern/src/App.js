import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PerfilRescatista from './views/PerfilRescatista';
import AgregarMascota from './views/AgregarMascota';
import EditarMascota from './views/EditarMascota';
import PerfilMascota from './views/PerfilMascota';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PerfilRescatista />} />
        <Route path="/pets/new" element={<AgregarMascota />} />
        <Route path="/pets/:id/edit" element={<EditarMascota />} />
        <Route path="/pets/:id" element={<PerfilMascota />} />
      </Routes>
    </div>
  );
}

export default App;
