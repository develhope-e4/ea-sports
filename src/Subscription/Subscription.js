import Boton from "../components/Boton/Boton";
const Subscription = () => {
    return(
     <Boton
            esPrimario={false}
            isLight={false}
            onClick={() => console.log("click en el boton dorado")}
            texto={"Comprar ahora"}
          />
    );
}
export default Subscription;