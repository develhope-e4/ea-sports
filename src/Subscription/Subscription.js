import Boton from "../components/Boton/Boton";
const Subscription = () => {
  return (
    <div>
      <div>
        <Boton
          esPrimario={false}
          isLight={true}
          onClick={() => console.log("click en el boton blanco")}
          texto={"Únete ya"}
        />
      </div>
      <Boton
        esPrimario={false}
        isLight={false}
        onClick={() => console.log("click en el boton negro")}
        texto={"Más información"}
      />
    </div>
  );
};
export default Subscription;
