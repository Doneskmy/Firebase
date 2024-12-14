/* eslint-disable */
import './App.css';
import Comentarios from './componentes/Aplicacao'; 


function App() {
  return (
    <div className='App-header'>
      <header>
      <h3 className='App'>
          Minha aplicação do <span id='Firebase'>Firebase</span>.
        </h3>
       <Comentarios />
      </header>
    </div>
  );
}

export default App;
