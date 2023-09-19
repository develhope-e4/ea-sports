import logo from "./logo.svg";
import "./App.css";
import "./styles/index.scss";
import EjemploComponente from "./components/EjemploComponente/EjemploComponente";
import Boton from "./components/Boton/Boton";
import CardDestacada from "./components/CardDestacada/CardDestacada";
import Card from "./components/Cards/Cards";
import LoopVideo from "./components/LoopVideo/LoopVideo";

function App() {
  return (
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="flex-col-center">
          <svg></svg>
          <div className="container">
          <LoopVideo 
            imagenSrc="./Immorlas-Logo.svg"
            videoSrc="./immortals.mp4"
          />
          <div className="compraAhora">
            <Boton 
              esPrimario={true}
              isLight={false}
              onClick={() => console.log("click en el boton dorado")}
              texto={"Comprar ahora"}
            />
          </div> 
          {/**
           * He metido el componenete dentro de un dic con una clase para poder editarlo en scss
           * no sé si hay un metodo mejor de hacerlo
           */}
          </div>
          {/**
           * Manera de invocar a mi componente reutilizable
           */}
          <Card
            imagenSrc="Card-ea-positive.png"
            nombre="Electronic Arts Inc."
            fecha="10-ago-2023"
            titulo="Ya están abiertas las votaciones para el primer Premio al juego positivo de..."
            texto="El Premio al juego positivo de EA reconoce a finalistas de eSports que han elevado la cultura del juego y celebra su contribución con positividad, habilidad e impacto en la comunidad de la ALGS."
          />
          <EjemploComponente
            esPrimario={true}
            texto={"Boton primario"}
            onClick={() => console.log("click en el boton primario")}
          />
          <EjemploComponente
            esPrimario={false}
            texto={"Boton secundario"}
            onClick={() => console.log("click en el boton secundario")}
          />
          <EjemploComponente
            esPrimario={false}
            disabled={true}
            onClick={() => console.log("click en el boton disabled")}
            texto={"Boton secundario"}
          />
          <Boton
            esPrimario={true}
            isLight={false}
            onClick={() => console.log("click en el boton dorado")}
            texto={"Comprar ahora"}
          />
          <Boton
            esPrimario={false}
            isLight={false}
            onClick={() => console.log("click en el boton negro")}
            texto={"Últimos juegos"}
          />
          <Boton
            esPrimario={false}
            isLight={true}
            onClick={() => console.log("click en el boton blanco")}
            texto={"Únete ya"}
          />
          <CardDestacada backgroundImage="eafc24.png" gameLogo="EAlogo.svg" />
        </div>
        <div>
          <Boton
            esPrimario={true}
            onClick={() => console.log("click en el boton secundario")}
            texto={"Comprar ahora"}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
