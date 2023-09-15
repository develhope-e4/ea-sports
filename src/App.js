import logo from "./logo.svg";
import "./App.css";
import "./styles/index.scss";
import EjemploComponente from "./components/EjemploComponente/EjemploComponente";
import Boton from "./components/Boton/Boton";
import Icono from "./components/Icono/Icono";
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
          <Icono
            xmlns={"http://www.w3.org/2000/svg"}
            width={"23px"}
            height={"23px"}
            viewBox={"0 0 23 23"}
            version={"1.1"}
            d={
              "M 11.5 14.375 C 9.914062 14.375 8.625 13.085938 8.625 11.5 C 8.625 9.914062 9.914062 8.625 11.5 8.625 C 13.085938 8.625 14.375 9.914062 14.375 11.5 C 14.375 13.085938 13.085938 14.375 11.5 14.375 Z M 14.375 4.3125 C 14.375 2.726562 13.085938 1.4375 11.5 1.4375 C 9.914062 1.4375 8.625 2.726562 8.625 4.3125 C 8.625 5.898438 9.914062 7.1875 11.5 7.1875 C 13.085938 7.1875 14.375 5.898438 14.375 4.3125 Z M 14.375 18.6875 C 14.375 17.101562 13.085938 15.8125 11.5 15.8125 C 9.914062 15.8125 8.625 17.101562 8.625 18.6875 C 8.625 20.273438 9.914062 21.5625 11.5 21.5625 C 13.085938 21.5625 14.375 20.273438 14.375 18.6875 Z M 14.375 18.6875 "
            }
          />
        </div>
      </header>
    </div>
  );
}

export default App;
