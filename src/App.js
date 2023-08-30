import logo from "./logo.svg";
import "./App.css";
import "./styles/index.scss";
import EjemploComponente from "./components/EjemploComponente/EjemploComponente";
import Boton from "./components/Boton/Boton";
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
            isDark={false}
            onClick={() => console.log("click en el boton dorado")}
            texto={"Comprar ahora"}
            />
            <Boton
            esPrimario={false}
            isDark={false}
            onClick={() => console.log("click en el boton blanco")}
            texto={"Últimos juegos"}
            />
            <Boton
            esPrimario={false}
            isDark={true}
            onClick={() => console.log("click en el boton dorado")}
            texto={"Únete ya"}
            />
           
        </div>
      </header>
    </div>
  );
}

export default App;
