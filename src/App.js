import logo from "./logo.svg";
import "./App.css";
import "./styles/index.scss";
import EjemploComponente from "./components/EjemploComponente/EjemploComponente";
import Boton from "./components/Boton/Boton";
import Card from "./components/Cards/Cards";
import LoopVideo from "./components/LoopVideo/LoopVideo";

function App() {
  return (
    <div className="App">
      <div className="flex-col-center">
        <svg></svg>
        <LoopVideo />
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
    </div>
  );
}

export default App;
