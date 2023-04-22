
import { useState } from "react";
import Equipes from "./Componentes/Equipes";
import Formulario from "./Componentes/Formulario";

function App() {

  const [colaboradores, setColaboradores] = useState('')
  const aoNovoColaboradorCadastrado = (colaborador) =>{
    console.log(colaborador)
    setColaboradores(...colaboradores, colaborador)
  }

  const equipes =
    [
      {
        nome: 'Gestão',
        corDeFundo: '#617143'
      },
      {
        nome: 'Manutenção',
        corDeFundo: '#DF7857'
      },

      {
        nome: 'Logistica',
        corDeFundo: '#E7AB9A'
      },
      {
        nome: 'Produção',
        corDeFundo: '#EDE9D5'
      },
      {
        nome: 'Auxiliar',
        corDeFundo: '#ffffff'
      },
    ]

  return (
    <div className="App">
      <Formulario aoColaboradorCanomedastrado = { colaborador =>aoNovoColaboradorCadastrado(colaborador)}/>

      {equipes.map(equipe => <Equipes
        key={equipe.nome}
        equipe={equipe.nome}
        corDeFundo={equipe.corDeFundo}
        colaboradores={colaboradores}
      />)}
    </div>
  );
}

export default App;
