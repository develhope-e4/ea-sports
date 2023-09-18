import "./Footer.scss";
import "./dropdownRegionFooterBlanco.css"; 
import Dropdown from "./dropdownRegionFooterBlanco.js";
import React, { Component } from 'react';
import { FaHeart } from "react-icons/fa";

const TextoLinks = () => {

    const itemsRegion = [
        {
          slug: "/link1/",
          anchor: "Link 1"
        },
        {
          slug: "/link2/",
          anchor: "Link 2"
        },
        {
          slug: "/link3/",
          anchor: "Link 3"
        }
      ];
      const itemsIdioma = [
        {
          slug: "/link1/",
          anchor: "Link 1"
        },
        {
          slug: "/link2/",
          anchor: "Link 2"
        },
        {
          slug: "/link3/",
          anchor: "Link 3"
        }
      ];

    return (
        <div className="footer">
            <div className="footerGris">

                <a className="linkTextoFooterGris" href="https://www.ea.com/es-es/careers">Empleo</a>
                <a className="linkTextoFooterGris" href="https://www.ea.com/es-es/executives">Ejecutivos</a>
                <a className="linkTextoFooterGris" href="https://www.ea.com/es-es/news/sharing-our-2021-impact-report">Informe de impacto</a>
                <a className="linkTextoFooterGris" href="https://www.ea.com/es-es/commitments">Nuestros compromisos</a>
                <a className="linkTextoFooterGris" href="https://www.ea.com/es-es/about/reporting-concerns">Comunicar inquietudes</a>
                <a className="linkTextoFooterGris" href="https://www.ea.com/es-es/commitments">Nuestros compromisos</a>

                <a className="linkTextoNegritaFooter" href="https://www.ea.com/es-es/about/reporting-concerns">Únete a la conversación</a>

                <div className="iconosRedesSociales">{
                    <script type="text/javascript" >
                    <FaHeart />
                    </script>
                    }

                </div>
            </div>
            <div className="footerBlanco">
                <div className="latIzq">
                    {/* <Image></Image> */}
                </div>
                <div className="supIzq" >
                    <a className="linkTextoFooterBlanco" href="https://www.ea.com/es-es/games/library">Biblioteca de juegos</a>
                    <a className="linkTextoFooterBlanco" href="https://www.ea.com/es-es/subscribe">Suscribirse</a>
                    <a className="linkTextoFooterBlanco" href="https://www.ea.com/es-es/redeem">Canjear Código</a>
                    <a className="linkTextoFooterBlanco" href="https://www.ea.com/es-es/ea-app">EA app</a>
                    <a className="linkTextoFooterBlanco" href="https://www.ea.com/es-es/ea-app">Acerca de</a>
                    <a className="linkTextoFooterBlanco" href="https://www.ea.com/es-es/ea-app">Accesibilidad</a>
                    <a className="linkTextoFooterBlanco" href="https://www.ea.com/es-es/ea-app">Ayuda</a>
                </div>
                <div className="supDer">
                    <p className="dropdownRegionFooterBlanco">
                        <p>Región (precios)</p>
                        <Dropdown dropdownTitle="Región (precios)" items={itemsRegion} />
                    </p>
                    <p className="dropdownIdiomaFooterBlanco">
                        <p>Idioma</p>
                        <Dropdown dropdownTitle="Idioma" items={itemsIdioma} />
                    </p>
                </div>
                <div className="infIzq">
                    <a className="linkTextoFooterBlanco" href="http://www.ea.com/es-es/legal">Información legal y privacidad</a>
                    <a className="linkTextoFooterBlanco" href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/">Acuerdo de usuario</a>
                    <a className="linkTextoFooterBlanco" href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/">Política de privacidad y directiva de cookies (tus derechos de privacidad)</a>
                    <a className="linkTextoFooterBlanco" href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/">Actualizaciones del servicio online</a>
                    <a className="linkTextoFooterBlanco" href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/">Seguridad</a>
                    <a className="linkTextoFooterBlanco" href="https://www.ea.com/es-es">Sus preferencias de cookies</a>
                    <p className="linkTextoFooterBlanco">
                        © 2023 Electronic Arts Inc.
                    </p>
                </div>
                <div className="infDer">
                    {/* <Image></Image> */}
                </div>

            </div>
        </div>

    )


};



export default TextoLinks;