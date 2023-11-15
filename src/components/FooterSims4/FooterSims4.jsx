import styles from "./FooterSims4.module.scss";

import Container from "../Container/Container";
import Section from "../Section/Section";

import VolverArribaBoton from "../VolverArribaBoton/VolverArribaBoton";
import FooterDropdownSims4 from "../FooterDropdownSims4/FooterDropdownSims4";
import { itemsIdioma, itemsRegion } from "../Footer/FooterData";

import Icono from "../Icono/Icono";
import { TfiFacebook } from "react-icons/tfi";
import { GrTwitter } from "react-icons/gr";
import { ImYoutube } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

import TRUSTe from "../../assets/Footer/TRUSTe.svg";
import logoSims4 from "../../../public/FooterSims4/logoSims4.png";
import logoMaxis from "../../../public/FooterSims4/logoMaxis.png";
import logoElectronicsArts from "../../../public/FooterSims4/logoElectronicsArts.png";
import logoPegi from "../../../public/FooterSims4/logoPegi.png";
import logoSexo from "../../../public/FooterSims4/logoSexo.png";
import logoViolencia from "../../../public/FooterSims4/logoViolencia.png";

function FooterSims4() {
  return (
    <div className={styles.footerSims4}>
      <Section className={styles.claro}>
        <div className={styles.fondoClaro}>
          <Container className={styles.contenido}>
            <div className={styles.subContenido1}>
              <div className={styles.iconosRS}>
                <Icono
                  href="https://www.facebook.com/ea.es/"
                  icono={<TfiFacebook />}
                  givenClassName={"iconoRS"}
                />
                <Icono
                  href="https://twitter.com/EA_Espana"
                  icono={<GrTwitter />}
                  givenClassName={"iconoRS"}
                />
                <Icono
                  href="https://www.instagram.com/ea/"
                  icono={<BsInstagram />}
                  givenClassName={"iconoRS"}
                />
                <Icono
                  href="https://www.youtube.com/EAvideos"
                  icono={<ImYoutube />}
                  givenClassName={"iconoRS"}
                />
              </div>
              <div className={styles.dropdowns}>
                <FooterDropdownSims4
                  dropdownTitle="Región (precios)"
                  items={itemsRegion}
                />
                <FooterDropdownSims4
                  dropdownTitle="Idioma"
                  items={itemsIdioma}
                />
                <div>
                  <VolverArribaBoton />
                </div>
              </div>
            </div>
            <div className={styles.barraHorizontal}></div>
            <div className={styles.subContenido2}>
              <div className={styles.logosFooter}>
                <img
                  className={styles.logoElectronicsArts}
                  src={logoElectronicsArts}
                  alt="Logo ElectronicsArts"
                />
                <img
                  className={styles.logoMaxis}
                  src={logoMaxis}
                  alt="Logo Maxis"
                />
                <img
                  className={styles.logoSims4}
                  src={logoSims4}
                  alt="Logo Sims4"
                />
              </div>
              <div clasname={styles.advertencias}>
                <img
                  className={styles.logoAdvertencias}
                  src={logoPegi}
                  alt="Logo Pegi"
                />
                <img
                  className={styles.logoAdvertencias}
                  src={logoSexo}
                  alt="Contenido no permitido para menores de 18 años"
                />
                <img
                  className={styles.logoAdvertencias}
                  src={logoViolencia}
                  alt="Contenido violento"
                />
              </div>
            </div>
            <div className={styles.barraHorizontal}></div>
            <div className={styles.subContenido3}>
              <p className={styles.linkTextoFooter}>Inicio</p>
              <div className={styles.barraVertical}></div>
              <p className={styles.linkTextoFooter}>Tienda</p>
              <div className={styles.barraVertical}></div>
              <p className={styles.linkTextoFooter}>Acerca de</p>
              <div className={styles.barraVertical}></div>
              <p className={styles.linkTextoFooter}>EA app para Windows</p>
              <div className={styles.barraVertical}></div>
              <p className={styles.linkTextoFooter}>Origin para Mac</p>
              <div className={styles.barraVertical}></div>
              <p className={styles.linkTextoFooter}>Biblioteca de juegos</p>
            </div>
            <div className={styles.barraHorizontal}></div>
            <div className={styles.subContenido4}>
              *El contenido adicional requiere una compra independiente y todas
              las actualizaciones del juego básico. Es posible que se necesite
              una cuenta de la plataforma correspondiente, conexión a Internet y
              una Cuenta EA. Se aplican restricciones de edad. Cláusula completa
              de incentivos de compra anticipada (inglés) (se publicará en la
              URL del pack de EA.com) **Esta oferta promocional finaliza el 18
              de enero de 2024. Válida para nuevas compras de Los Sims 4 Se
              Alquila Pack de Expansión (el "Producto") en la Tienda Origin
              (origin.com), EA app (www.ea.com/ea-app) o en las tiendas
              participantes. Canjea el código del Producto físico antes del 18
              de enero de 2025 para recibir el contenido adicional. Para el
              Producto digital, el contenido adicional se obtendrá
              automáticamente. La oferta no tiene valor en efectivo ni se podrá
              sustituir, intercambiar ni vender por dinero, bienes o servicios.
              No se podrá combinar con otras ofertas ni tarjetas de prepago
              canjeables por el contenido aplicable a menos que EA lo autorice
              expresamente. Quien efectúe la compra se hará cargo de los
              impuestos de venta aplicables. Esta oferta será nula en los países
              donde esté prohibida, gravada o limitada por la legislación
              vigente. Se necesita Los Sims 4 con todas sus actualizaciones.
              Consulta los requisitos mínimos del sistema del pack para PC. Para
              jugar y acceder a las funciones online y al contenido adicional es
              necesario disponer de conexión a Internet y una Cuenta EA, aceptar
              el Acuerdo de usuario de EA (terms.ea.com/es) y la Política de
              privacidad y directiva de cookies (privacy.ea.com/es), registrarse
              con un código de producto de un solo uso y disponer de una cuenta
              de la plataforma correspondiente. Es posible que necesites
              instalar el Cliente de Origin (origin.com/download) o EA app
              (ea.com/ea-app) para el producto para PC. Se aplican restricciones
              de edad. Consulta o.ea.com/ea/child-access-es y la cuenta de la
              plataforma correspondiente para obtener más información. Las
              actualizaciones obligatorias del contenido pueden descargarse de
              manera automática, necesitar almacenamiento adicional, ocasionar
              gastos de uso de banda ancha y requerir una compra adicional para
              acceder. EA puede retirar las funciones online 30 días después de
              publicar un aviso en ea.com/es-es/service-updates. Consulta la
              información del producto final cuando esté disponible en
              ea.com/es-es/legal.
            </div>
          </Container>
        </div>
      </Section>
      <Section className={styles.oscuro}>
        <div className={styles.fondoOscuro}>
          <Container className={styles.contenido}>
            <div className={styles.subContenido5}>
              <p className={styles.linkTextoFooter}>Ayuda</p>
              <div className={styles.barraVerticalBlanca}></div>
              <p className={styles.linkTextoFooter}>Información legal</p>
              <div className={styles.barraVerticalBlanca}></div>
              <p className={styles.linkTextoFooter}>Acuerdo de usuario</p>
              <div className={styles.barraVerticalBlanca}></div>
              <p className={styles.linkTextoFooter}>
                Política de privacidad y directiva de cookies
              </p>
              <div className={styles.barraVerticalBlanca}></div>
              <p className={styles.linkTextoFooter}>Condiciones de venta</p>
              <div className={styles.barraVerticalBlanca}></div>
              <p className={styles.linkTextoFooter}>
                Sus preferencias de cookies
              </p>
              <div className={styles.barraVerticalBlanca}></div>
              <p className={styles.linkTextoFooter}>Garantía de Gran Juego</p>
              <div className={styles.barraVerticalBlanca}></div>
              <p className={styles.linkTextoFooter}>Información corporativa</p>
              <div className={styles.barraVerticalBlanca}></div>
              <p className={styles.linkTextoFooter}>
                Términos del Servivio de Youtube
              </p>
              <div className={styles.barraVerticalBlanca}></div>
              <p className={styles.linkTextoFooter}>
                Política de Privacidad de Google
              </p>
              <div className={styles.barraVerticalBlanca}></div>
              <p className={styles.linkTextoFooter}>
                Actualizaciones del servicio online
              </p>
              <div className={styles.barraVerticalBlanca}></div>
              <p className={styles.linkTextoFooter}>Seguridad</p>
            </div>
            <div className={styles.barraHorizontalBlanca}></div>
            <div className={styles.subContenido6}>
              <p>
                Vendedor: EA Swiss Sàrl, Place du Molard 8, 1204, Ginebra, Suiza
                Inscrita en el Registro Mercantil de Ginebra con número de
                inscripción: CH-660-2328005-8. contact_eahelp@ea.com
              </p>
              <p>
                Los productos digitales vendidos en determinados territorios
                incluirán el IVA o el GST, según corresponda. Consulta las
                Condiciones de venta para más detalles.
              </p>
            </div>
            <div className={styles.barraHorizontalBlanca}></div>
            <div className={styles.subContenido7}>
              <p>&copy; 2023 Electronic Arts Inc.</p>
              <img src={TRUSTe} alt="Truste Logo" />
            </div>
          </Container>
        </div>
      </Section>
    </div>
  );
}

export default FooterSims4;
