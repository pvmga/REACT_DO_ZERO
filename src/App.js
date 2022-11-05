import React from 'react';

import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

import './App.css';
import FormularioProduto from './components/FormularioProduto';
import FormularioPessoa from './components/FormularioPessoa';
import FormularioHome from './components/FormularioHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormularioHome />} />
        <Route path="/produto" element={<FormularioProduto />} />
        <Route path="/pessoa" element={<FormularioPessoa />} />
      </Routes>
    </Router>
  );
}

export default App;
