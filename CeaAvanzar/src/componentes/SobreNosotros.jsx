import React from 'react'
import logo from '../../public/img/logo-avanzar.png'
import video from '../../public/videos/Video-grupal.mp4'
import franja from '../../public/img/franja-avanzar.png'
import { Link } from 'react-router-dom'
import '../../src/SobreNosotros.css'
import AOS from 'aos';

const SobreNosotros = () => {
    return (
        <>
            <header className='SobreNosotros'>
                {/* <img src={background} alt="background-chefs" className="background-chefs" /> */}
                <picture className="logo-info">
                    <img src={logo} alt="logo-avanzar" className="logo-avanzar" />
                </picture>
                <div className="menu">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" _msthidden="A" _mstaria-label="320099" _msthash="211">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                        <Link to="/sobre-nosotros" className="nav-link active" aria-current="page" _msttexthash="59059" _msthash="212"><button className='btnOn'>SOBRE NOSOTROS</button></Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/cursos" className="nav-link" _msttexthash="72878" _msthash="213"><button className='btnOff'>CURSOS</button></Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/nuestra-sede" className="nav-link" _msttexthash="72878" _msthash="213"><button className='btnOff'>NUESTRA SEDE</button></Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/contactanos" className="nav-link" _msttexthash="72878" _msthash="213"><button className='btnOff'>CONTÁCTANOS</button></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                <div className='infoNosotros'>
                    <div className='video' data-aos="fade-right">
                        <video loop autoPlay muted >
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                    <div className='cardInfo' data-aos="fade-left" >
                        <p>
                            El centro de enseñanza automovilistica AAVANZAR es líder en la formación de conductores de las categorías A2, B1 Y C1. Contamos con más de 10 años de experiencia y nos encontramos comprometidos en brindarle a nuestros alumnos las habilidades necesarias para obtener su licencia y manejar con confianza.
                            Ofrecemos cursos para conductores principiantes, recategorizacion y refuerzos para conductores avanzados contando con instructores experimentados dedicados a guiarlo en cada paso para obtener su certificado de manejo con éxito.
                        </p>
                    </div>
                </div>
                <div className='misionyvision'>
                    <div className='cardMisionyVision' data-aos="fade-up-right">
                        <p className='mision'>
                            MISION
                        </p>
                        <p className='textMision'>
                            El CEA busca enseñar de una manera integral a conductores que sean responsables, conscientes y cumplidores
                            de la normatividad vigente, a través de técnicas pedagógicas, teóricas y prácticas que garanticen un
                            aprendizaje significativo y responsable en la búsqueda de preservar la vida del conductor y de los
                            demás actores de la vía.
                            <picture>
                                <img src={franja} alt="franja-avanzar" className="franja-avanzar" />
                            </picture>
                        </p>
                    </div>
                    <div className='cardMisionyVision' data-aos="fade-up-left">
                        <p className='mision'>
                            VISION
                        </p>
                        <p className='textVision'>
                            Para el año 2026 el CEA será reconocido como un centro de enseñanza automovilistica líder en la enseñanza
                            de la conducción en Bogotá, a través de la formación integral de los conductores, administrando de manera
                            eficiente todos sus recursos y contando con un personal calificado y actualizado.
                            <picture>
                                <img src={franja} alt="franja-avanzar" className="franja-avanzar2" />
                            </picture>
                        </p>
                    </div>
                </div>
                <div className='infoLegal'>
                    <div data-aos="fade-left" >
                        <p>
                           Somos una academia aprobada por los ministerios de educación y transporte. <br></br>
                        </p>
                        <a href='https://www.runt.com.co/directorio-de-actores?title=cea+aavanzar&field_tipo_value=All&field_c_digo_municipio_value=All&field_c_digo_departamento_value_1=All' target={'_blank'}><img src='https://i.postimg.cc/L84sVdhz/ministerio.png' className='cardInfo2'></img></a>
                        <p>
                           Haz click sobre la imagen y podrás verlo directamente en la página del runt.
                        </p>
                    </div>
                </div>
            </header>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            {
                AOS.init({
                    key: Date.now(),
                    duration: 1000,
                    once: true
                })
            }
        </>
    )
}

export default SobreNosotros