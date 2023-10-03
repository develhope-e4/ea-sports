import "./Footer.scss";
import FooterDropdown from "../FooterDropdown/FooterDropdown.js";
import React from "react";
import { TfiFacebook } from "react-icons/tfi";
import { GrTwitter } from "react-icons/gr";
import { ImYoutube } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { IoLogoTwitch } from "react-icons/io";
import Icono from "../Icono/Icono";
import banderaAlemania from "../../assets/Footer/banderaAlemania.png";
import banderaAustralia from "../../assets/Footer/banderaAustralia.png";
import banderaBrasil from "../../assets/Footer/banderaBrasil.png";
import banderaCanada from "../../assets/Footer/banderaCanada.png";
import banderaChekia from "../../assets/Footer/banderaChekia.png";
import banderaChina from "../../assets/Footer/banderaChina.jpeg";
import banderaCorea from "../../assets/Footer/banderaCorea.jpeg"; 
import banderaDinamarca from "../../assets/Footer/banderaDinamarca.png";
import banderaEspaña from "../../assets/Footer/banderaEspaña.png";
import banderaEstadosUnidos from "../../assets/Footer/banderaEstadosUnidos.png";
import banderaFinlandia from "../../assets/Footer/banderaFinlandia.png";
import banderaFrancia from "../../assets/Footer/banderaFrancia.png";
import banderaItalia from "../../assets/Footer/banderaItalia.png";
import banderaJapon from "../../assets/Footer/banderaJapon.png";
import banderaMexico from "../../assets/Footer/banderaMexico.png";
import banderaNederland from "../../assets/Footer/banderaNederland.png";
import banderaNorge from "../../assets/Footer/banderaNorge.png";
import banderaPolonia from "../../assets/Footer/banderaPolonia.png";
import banderaReinoUnido from "../../assets/Footer/banderaReinoUnido.png";
import banderaRusia from "../../assets/Footer/banderaRusia.png";
import banderaSeverige from "../../assets/Footer/banderaSeverige.png";
import banderaTurkia from "../../assets/Footer/banderaTurkia.png";
import eaPurple from "../../assets/Footer/eaPurple.png";
import TRUSTe from "../../assets/Footer/TRUSTe.svg";



const Footer = () => {
  const itemsRegion = [
    {
      slug: "/link1/",
      anchor: "Austria",
    },
    {
      slug: "/link2/",
      anchor: "Bélgica",
    },
    {
      slug: "/link3/",
      anchor: "Bulgaria",
    },
    {
      slug: "/link4/",
      anchor: "Croacia",
    },
    {
      slug: "/link5/",
      anchor: "Chipre",
    },
    {
      slug: "/link6/",
      anchor: "República Checa",
    },
    {
      slug: "/link7/",
      anchor: "Dinamarca",
    },
    {
      slug: "/link8/",
      anchor: "Estonia",
    },
    {
      slug: "/link9/",
      anchor: "Finlandia",
    },
    {
      slug: "/link10/",
      anchor: "Finlandia",
    }, {
      slug: "/link11/",
      anchor: "Francia",
    },
    {
      slug: "/link12/",
      anchor: "Alemania",
    },
    {
      slug: "/link13/",
      anchor: "Grecia",
    },
    {
      slug: "/link14/",
      anchor: "Hungría",
    },
    {
      slug: "/link15/",
      anchor: "Letonia",
    },
    {
      slug: "/link16/",
      anchor: "Islandia",
    },
    {
      slug: "/link17/",
      anchor: "Irlanda",
    },
    {
      slug: "/link18/",
      anchor: "Italia",
    },
    {
      slug: "/link19/",
      anchor: "Liechtenstein",
    },

    {
      slug: "/link20/",
      anchor: "Lituania",
    },
    {
      slug: "/link21/",
      anchor: "Luxemburgo",
    },

    {
      slug: "/link22/",
      anchor: "Malta",
    },
    {
      slug: "/link23/",
      anchor: "Países Bajos",
    },
    {
      slug: "/link24/",
      anchor: "Noruega",
    },

    {
      slug: "/link25/",
      anchor: "Polonia",
    },
    {
      slug: "/link26/",
      anchor: "Rumanía",
    },
    {
      slug: "/link27/",
      anchor: "Eslovaquia",
    },
    {
      slug: "/link28/",
      anchor: "Eslovenia",
    },
    {
      slug: "/link29/",
      anchor: "España",
    },
    {
      slug: "/link30/",
      anchor: "Suecia",
    },
    {
      slug: "/link31/",
      anchor: "Suiza",
    },


  ];
  const itemsIdioma = [
    {
      slug: "/link1/",
      flag: banderaEstadosUnidos,
      anchor: "United States",
    },
    {
      slug: "/link2/",
      flag: banderaReinoUnido,
      anchor: "United kimdoms",
    },
    {
      slug: "/link3/",
      flag: banderaAustralia,
      anchor: "Australia",
    },
    {
      slug: "/link4/",
      flag: banderaFrancia,
      anchor: "France",
    },
    {
      slug: "/link5/",
      flag: banderaAlemania,
      anchor: "Deutschland",
    },
    {
      slug: "/link6/",
      flag: banderaItalia,
      anchor: "Italia",
    },
    {
      slug: "/link7/",
      flag: banderaJapon,
      anchor: "日本",
    },
    {
      slug: "/link8/",
      flag: banderaPolonia,
      anchor: "Poslka",
    },
    {
      slug: "/link9/",
      flag: banderaBrasil,
      anchor: "Brasil",
    },
    {
      slug: "/link10/",
      flag: banderaRusia,
      anchor: "Россия",
    },
    {
      slug: "/link11/",
      flag: banderaEspaña,
      anchor: "España",
    },
    {
      slug: "/link12/",
      flag: banderaChekia,
      anchor: "Česká republika",
    },
    {
      slug: "/link13/",
      flag: banderaCanada,
      anchor: "Canada (En)",
    },
    {
      slug: "/link14/",
      flag: banderaCanada,
      anchor: "Canada (Fr)",
    },
    {
      slug: "/link15/",
      flag: banderaDinamarca,
      anchor: "Danmark",
    },
    {
      slug: "/link16/",
      flag: banderaFinlandia,
      anchor: "Suomi",
    },
    {
      slug: "/link17/",
      flag: banderaMexico,
      anchor: "México",
    },
    {
      slug: "/link18/",
      flag: banderaNederland,
      anchor: "Nederland",
    },
    {
      slug: "/link19/",
      flag: banderaNorge,
      anchor: "Norge",
    },
    {
      slug: "/link20/",
      flag: banderaSeverige,
      anchor: "Sverige",
    },
    {
      slug: "/link21/",
      flag: banderaChina,
      anchor: "中国",
    },
    {
      slug: "/link22/",
      flag: banderaCorea,
      anchor: "대한민국",
    },
    {
      slug: "/link23/",
      flag: banderaChina,
      anchor: "繁體中文",
    },
    {
      slug: "/link24/",
      flag: banderaTurkia,
      anchor: "Türkiye",
    },

  ];

  return (
    <div className="footer">
      <div className="footerGris">
        <div className="linkTextoFooterGris">
          <a href="https://www.ea.com/es-es/careers">Empleo</a>
          <a href="https://www.ea.com/es-es/executives">Ejecutivos</a>
          <a href="https://www.ea.com/es-es/news/sharing-our-2021-impact-report">Informe de impacto</a>
          <a href="https://www.ea.com/es-es/commitments">Nuestros compromisos</a>
          <a className="comunicarInquietudes" href="https://www.ea.com/es-es/about/reporting-concerns">Comunicar inquietudes</a>
        </div>
        <div className="linkTextoNegritaFooter">
          <a className="linkTextoNegritaFooterTexto" href="https://www.ea.com/es-es/about/reporting-concerns">Únete a la conversación</a>
          <div className="iconosRS">
            <Icono className="iconosRedesSociales" href="https://www.facebook.com/ea.es/" icono={<TfiFacebook />} />
            <Icono className="iconosRedesSociales" href="https://twitter.com/EA_Espana" icono={<GrTwitter />} />
            <Icono className="iconosRedesSociales" href="https://www.youtube.com/EAvideos" icono={<ImYoutube />} />
            <Icono className="iconosRedesSociales" href="https://www.instagram.com/ea/" icono={<BsInstagram />} />
            <Icono className="iconosRedesSociales" href="https://www.twitch.tv/ea" icono={<IoLogoTwitch />} />
          </div>
        </div>
      </div>
      <div className="footerBlanco">
      <img className="latIzq" src={eaPurple} />
          <div className="supIzq">
            <a href="https://www.ea.com/es-es/games/library">Biblioteca de juegos</a>
            <a href="https://www.ea.com/es-es/subscribe">Suscribirse</a>
            <a href="https://www.ea.com/es-es/redeem">Canjear Código</a>
            <br/>
            <a href="https://www.ea.com/es-es/ea-app">EA app</a>
            <a href="https://www.ea.com/es-es/ea-app">Acerca de</a>
            <a href="https://www.ea.com/es-es/ea-app">Accesibilidad</a>
            <a href="https://www.ea.com/es-es/ea-app">Ayuda</a>
          </div>
          <div className="supDer">
            <FooterDropdown dropdownTitle="Región (precios)" items={itemsRegion} />
            <FooterDropdown dropdownTitle="Idioma" items={itemsIdioma} />
          </div>
          <div className="infIzq">
            <a href="http://www.ea.com/es-es/legal">Información legal y privacidad</a>
            <a href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/">Acuerdo de usuario</a>
            <br/>
            <a href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/">Política de privacidad y directiva de cookies (tus derechos de privacidad)</a>
            <br/>
            <a href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/">Actualizaciones del servicio online</a>
            <a href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/">Seguridad</a>
            <a href="https://www.ea.com/es-es">Sus preferencias de cookies</a>
            <p>© 2023 Electronic Arts Inc.</p>
          </div>
          <div className="infDer">
            <img src={TRUSTe} alt="Truste Logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
