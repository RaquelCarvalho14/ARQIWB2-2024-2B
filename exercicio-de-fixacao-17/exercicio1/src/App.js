import './App.css';
import DetalhesUsuario from './components/DetalhesUsuario';

function App() {
  const pessoas = [
    {id: 1, nome: "Damares", idade: 9, profissao: "estudante"},
    {id: 2, nome: "Maria Eduarda", idade: 19, profissao: "balconista"},
    {id: 3, nome: "Milena", idade: 38, profissao: "auxiliar de limpeza"}
  ]

  return (
    <div className="App">
      <h1>Exercício 1</h1>
      <hr/>
      {
        pessoas.map((pessoa) => (
          <DetalhesUsuario
            nome={pessoa.nome}
            idade={pessoa.idade}
            profissao={pessoa.profissao}
          />
        ))
      }
    </div>
  );
}

export default App;