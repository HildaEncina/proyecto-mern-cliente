import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import AddPet from './views/AddPet';
import EditPet from './views/EditPet';
import PetDetail from './views/PetDetail';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pets/new" element={<AddPet />} />
        <Route path="/pets/:id/edit" element={<EditPet />} />
        <Route path="/pets/:id" element={<PetDetail />} />
      </Routes>
    </div>
  );
}

export default App;
