import "./Footer.scss";
import FooterDropdown from "../FooterDropdown/FooterDropdown.jsx";
 
import { TfiFacebook } from "react-icons/tfi";
import { GrTwitter } from "react-icons/gr";
import { ImYoutube } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { IoLogoTwitch } from "react-icons/io";
import Icono from "../Icono/Icono";
import { itemsIdioma, itemsRegion } from "./FooterData";
import eaPurple from "../../assets/Footer/eaPurple.png";
import TRUSTe from "../../assets/Footer/TRUSTe.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fondoGris">
        <div className="footerGris">
          <div className="linkTextoFooterGris">
            <a href="https://www.ea.com/es-es/careers">Empleo</a>
            <a href="https://www.ea.com/es-es/executives">Ejecutivos</a>
            <a href="https://www.ea.com/es-es/news/sharing-our-2021-impact-report">
              Informe de impacto
            </a>
            <a href="https://www.ea.com/es-es/commitments">
              Nuestros compromisos
            </a>
            <a
              className="comunicarInquietudes"
              href="https://www.ea.com/es-es/about/reporting-concerns"
            >
              Comunicar inquietudes
            </a>
          </div>
          <div className="linkTextoNegritaFooter">
            <a
              className="linkTextoNegritaFooterTexto"
              href="https://www.ea.com/es-es/about/reporting-concerns"
            >
              Únete a la conversación
            </a>
            <div className="iconosRS">
              <Icono
                className="iconosRedesSociales"
                href="https://www.facebook.com/ea.es/"
                icono={<TfiFacebook />}
              />
              <Icono
                className="iconosRedesSociales"
                href="https://twitter.com/EA_Espana"
                icono={<GrTwitter />}
              />
              <Icono
                className="iconosRedesSociales"
                href="https://www.youtube.com/EAvideos"
                icono={<ImYoutube />}
              />
              <Icono
                className="iconosRedesSociales"
                href="https://www.instagram.com/ea/"
                icono={<BsInstagram />}
              />
              <Icono
                className="iconosRedesSociales"
                href="https://www.twitch.tv/ea"
                icono={<IoLogoTwitch />}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fondoBlanco">
        <div className="footerBlanco">
          <img className="latIzq" src={eaPurple} />
          <div className="supIzq">
            <a href="https://www.ea.com/es-es/games/library">
              Biblioteca de juegos
            </a>
            <a href="https://www.ea.com/es-es/subscribe">Suscribirse</a>
            <a href="https://www.ea.com/es-es/redeem">Canjear Código</a>
            <br />
            <a href="https://www.ea.com/es-es/ea-app">EA app</a>
            <a href="https://www.ea.com/es-es/ea-app">Acerca de</a>
            <a href="https://www.ea.com/es-es/ea-app">Accesibilidad</a>
            <a href="https://www.ea.com/es-es/ea-app">Ayuda</a>
          </div>
          <div className="supDer">
            <FooterDropdown
              dropdownTitle="Región (precios)"
              items={itemsRegion}
            />
            <FooterDropdown dropdownTitle="Idioma" items={itemsIdioma} />
          </div>
          <div className="infIzq">
            <a href="http://www.ea.com/es-es/legal">
              Información legal y privacidad
            </a>
            <a href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/">
              Acuerdo de usuario
            </a>
            <br />
            <a href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/">
              Política de privacidad y directiva de cookies (tus derechos de
              privacidad)
            </a>
            <br />
            <a href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/">
              Actualizaciones del servicio online
            </a>
            <a href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/">Seguridad</a>
            <a href="https://www.ea.com/es-es">Sus preferencias de cookies</a>
            <p>© 2023 Electronic Arts Inc.</p>
          </div>
          <div className="infDer">
            <img src={TRUSTe} alt="Truste Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
