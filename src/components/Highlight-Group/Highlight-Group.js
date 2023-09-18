import "./Highlight-Group.scss";
import CardDestacada from "../CardDestacada/CardDestacada";





const HighlightGroup= () => {


   let cards = [];

  function actualizarRutas() {
    for (let i = 1; i <= 6; i++) {
      const rutaBg = `/highlight/${i}/bg.png`;
      const rutaLogo = `/highlight/${i}/logo.svg`;
      cards.push(
        <CardDestacada
          url="http://google.com"
          backgroundImage={rutaBg}
          gameLogo={rutaLogo}
        />);
    }
  }

  actualizarRutas();





  return (
    <div className="highlightGroup">
      {cards}
    </div>
  );
};

export default HighlightGroup;
