import './App.css';
import DetalhesCarros from './components/DetalhesCarros';

function App() {
  const carros = [
    { modelo: "Civic", marca: "Honda", cor: "Branco" },
    { modelo: "Compass", marca: "Jeep", cor: "Cinza" },
    { modelo: "Corolla", marca: "Toyota", cor: "Azul" }
  ]

  return (
    <div className="App">
      <h1>Exercício 2</h1>
      <hr/>
      {
        carros.map((carro) => (
          <DetalhesCarros
            modelo={carro.modelo}
            marca={carro.marca}
            cor={carro.cor}
          />
        ))
      }
    </div>
  );
}

export default App;