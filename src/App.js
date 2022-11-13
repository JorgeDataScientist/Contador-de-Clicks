import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import Logofcc from './imagenes/Logofcc.png';
import { useState } from 'react';

function App() {
  
  //Aca agrego el codigo para darle interactividad a los botones que se encuentran mas abajo en el 
  //"div className='contenedor-del-contador'"
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () =>{
    setNumClics(numClics + 1);
  };

  const reiniciaContador = () =>{
    setNumClics(0);
  };
  //------------------------------------------------

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        
        <img 
        className='freecodecamp-logo' 
        src={Logofcc} 
        alt='Logo FreeCodeCamp'
        />        
      </div>

      <div className='contenedor-del-contador'>
        <Contador
          numClics={numClics}
        />
        
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton  
           texto='Reiniciar'
           noBotonDeClic={false}
           manejarClic={reiniciaContador}
        />
      </div>
    
    </div>
  );
}

export default App;
