import logo from "./logo.svg";
import "./App.css";
import "./styles/index.scss";
import EjemploComponente from "./components/EjemploComponente/EjemploComponente";
import Boton from "./components/Boton/Boton";
import Card from "./components/Cards/Cards";
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
        </div>
      </header>
    </div>
  );
}

export default App;
