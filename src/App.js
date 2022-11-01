import './App.css';
import FormularioProduto from './components/FormularioProduto';
import HeaderApp from './components/HeaderApp';
import TabelaPessoa from './components/TabelaProduto';

function App() {
  return (
    <div className="App">
      <HeaderApp />
      <FormularioProduto />
      <TabelaPessoa />
    </div>
  );
}

export default App;
