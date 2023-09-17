import "./Footer.scss";

/**
@param {string} texto - Texto que va a llevar el boton
@param {Callback} onClick - Callback que se ejecuta cada vez que el usuario hace click en el boton
@returns App
*/

const linksFooter = ({ texto, onClick }) => {
    texto = [<p className="textoLinkFooter" />]
    onClick = [<a className="linkTextoFooter" />]

    return (
        <a className={"texto"} onClick >
            {texto}
        </a>
    //     <a className={"texto"} onClick >
    //     {texto}
    // </a>


    
        // <div className='contenidoFooter'>

        //     <a href="https://www.ea.com/es-es/careers" className="linkTextoFooter">
        //         <p className="textoLinkFooter">Empleo</p>
        //     </a>
        //     <a href="https://www.ea.com/es-es/executives" className="linkTextoFooter">
        //         <p className="textoLinkFooter">Ejecutivos</p>
        //     </a>
        //     <a href="https://www.ea.com/es-es/news/sharing-our-2021-impact-report" className="linkTextoFooter">
        //         <p className="textoLinkFooter">Informe de impacto</p>
        //     </a>
        //     <a href="https://www.ea.com/es-es/commitments" className="linkTextoFooter">
        //         <p className="textoLinkFooter">Nuestros compromisos</p>
        //     </a>
        //     <a href="https://www.ea.com/es-es/about/reporting-concerns" className="linkTextoFooter">
        //         <p className="textoLinkFooter">Comunicar inquietudes</p>
        //     </a>
        //     <a href="https://www.ea.com/es-es/careers" className="linkTextoFooter">
        //         <p className="textoLinkFooter">Únete a la conversación</p>
        //     </a>

        //     <div className="redesSociales">
        //         <a href="https://www.facebook.com/ea.es/" className="linkIconFooter">
        //             <div className="iconRedesSociales">

        //             </div>
        //         </a>
        //     </div>

        // </div>


    )
};

export default Footer;