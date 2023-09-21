import "./Footer.scss";
import FooterDropdown from "../FooterDropdown/FooterDropdown.js";
import React from "react";
import { TfiFacebook } from "react-icons/tfi";
import { GrTwitter } from "react-icons/gr";
import { ImYoutube } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { IoLogoTwitch } from "react-icons/io";
import Icono from "../Icono/Icono";

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
      anchor: "United States", src: ""
    },
    {
      slug: "/link2/",
      anchor: "United kimdoms",
    },
    {
      slug: "/link3/",
      anchor: "Australia",
    },
    {
      slug: "/link4/",
      anchor: "France",
    },
    {
      slug: "/link5/",
      anchor: "Deutschland",
    },
    {
      slug: "/link6/",
      anchor: "Italia",
    },
    {
      slug: "/link7/",
      anchor: "日本",
    },
    {
      slug: "/link8/",
      anchor: "Poslka",
    },
    {
      slug: "/link9/",
      anchor: "Brasil",
    },
    {
      slug: "/link10/",
      anchor: "Россия",
    },
    {
      slug: "/link11/",
      anchor: "España",
    },
    {
      slug: "/link12/",
      anchor: "Česká republika",
    },
    {
      slug: "/link13/",
      anchor: "Canada (En)",
    },
    {
      slug: "/link14/",
      anchor: "Canada (Fr)",
    },
    {
      slug: "/link15/",
      anchor: "Danmark",
    },
    {
      slug: "/link16/",
      anchor: "Suomi",
    },
    {
      slug: "/link17/",
      anchor: "México",
    },
    {
      slug: "/link18/",
      anchor: "Nederland",
    },
    {
      slug: "/link19/",
      anchor: "Norge",
    },
    {
      slug: "/link20/",
      anchor: "Sverige",
    },
    {
      slug: "/link21/",
      anchor: "中国",
    },
    {
      slug: "/link22/",
      anchor: "대한민국",
    },
    {
      slug: "/link23/",
      anchor: "繁體中文",
    },
    {
      slug: "/link24/",
      anchor: "Türkiye",
    },

  ];

  return (
    <div className="footer">
      <div className="footerGris">
        <div className="gridFooter">
          <a
            className="linkTextoFooterGris"
            href="https://www.ea.com/es-es/careers"
          >
            Empleo
          </a>
          <a
            className="linkTextoFooterGris"
            href="https://www.ea.com/es-es/executives"
          >
            Ejecutivos
          </a>
          <a
            className="linkTextoFooterGris"
            href="https://www.ea.com/es-es/news/sharing-our-2021-impact-report"
          >
            Informe de impacto
          </a>
          <a
            className="linkTextoFooterGris"
            href="https://www.ea.com/es-es/commitments"
          >
            Nuestros compromisos
          </a>
          <a
            className="linkTextoFooterGris"
            href="https://www.ea.com/es-es/about/reporting-concerns"
          >
            Comunicar inquietudes
          </a>
        </div>
        <div className="gridFooter">
          <div className="supDer">
            <p className="dropdownRegionFooterBlanco">
              <FooterDropdown
                dropdownTitle="Región (precios)"
                items={itemsRegion}
              />
            </p>
            <p className="dropdownIdiomaFooterBlanco">
              <FooterDropdown dropdownTitle="Idioma" items={itemsIdioma} />
            </p>
          </div>
        </div>
        <div className="gridFooter">
          <a
            className="linkTextoNegritaFooter"
            href="https://www.ea.com/es-es/about/reporting-concerns"
          >
            Únete a la conversación
            <div className="iconosRS">
              <Icono className="iconosRedesSociales"
                href="https://www.facebook.com/ea.es/" icono={<TfiFacebook />} />
              <Icono className="iconosRedesSociales"
                href="https://twitter.com/EA_Espana" icono={<GrTwitter />} />
              <Icono className="iconosRedesSociales"
                href="https://www.youtube.com/EAvideos" icono={<ImYoutube />} />
              <Icono className="iconosRedesSociales"
                href="https://www.instagram.com/ea/" icono={<BsInstagram />} />
              <Icono className="iconosRedesSociales"
                href="https://www.twitch.tv/ea" icono={<IoLogoTwitch />} />
            </div>
          </a>

          <div className="iconosRedesSociales">
            {
              <script type="text/javascript">
                <TfiFacebook />
              </script>
            }
          </div>
        </div>
      </div>
      <div className="footerBlanco">
        <div className="gridFooter">
          <img className="latIzq" src="Footer/ea-purple.png" />
          <div className="supIzq">
            <a
              className="linkTextoFooterBlanco"
              href="https://www.ea.com/es-es/games/library"
            >
              Biblioteca de juegos
            </a>
            <a
              className="linkTextoFooterBlanco"
              href="https://www.ea.com/es-es/subscribe"
            >
              Suscribirse
            </a>
            <a
              className="linkTextoFooterBlanco"
              href="https://www.ea.com/es-es/redeem"
            >
              Canjear Código
            </a>
            <a
              className="linkTextoFooterBlanco"
              href="https://www.ea.com/es-es/ea-app"
            >
              EA app
            </a>
            <a
              className="linkTextoFooterBlanco"
              href="https://www.ea.com/es-es/ea-app"
            >
              Acerca de
            </a>
            <a
              className="linkTextoFooterBlanco"
              href="https://www.ea.com/es-es/ea-app"
            >
              Accesibilidad
            </a>
            <a
              className="linkTextoFooterBlanco"
              href="https://www.ea.com/es-es/ea-app"
            >
              Ayuda
            </a>
          </div>
          <div className="infIzq">
            <a
              className="linkTextoFooterBlanco2"
              href="http://www.ea.com/es-es/legal"
            >
              Información legal y privacidad
            </a>
            <a
              className="linkTextoFooterBlanco2"
              href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/"
            >
              Acuerdo de usuario
            </a>
            <a
              className="linkTextoFooterBlanco2"
              href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/"
            >
              Política de privacidad y directiva de cookies (tus derechos de
              privacidad)
            </a>
            <a
              className="linkTextoFooterBlanco2"
              href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/"
            >
              Actualizaciones del servicio online
            </a>
            <a
              className="linkTextoFooterBlanco2"
              href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/"
            >
              Seguridad
            </a>
            <a
              className="linkTextoFooterBlanco2"
              href="https://www.ea.com/es-es">
              Sus preferencias de cookies
            </a>
            <p className="linkTextoFooterBlanco2">© 2023 Electronic Arts Inc.</p>
          </div>
        </div>
        <div className="gridFooter">
          <div className="infDer">
            <img src="Footer/TRUSTe.svg"></img>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
