import React from 'react'
import logo from '../../public/img/logo-avanzar.png'
import { Link } from 'react-router-dom'
import '../../src/componentes/Contactanos.css'
// import AOS from 'aos';

const Contactanos = () => {
  return (
    <section className="home">
      <header className='cursos'>
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
                                        <Link to="/sobre-nosotros" className="nav-link active" aria-current="page" _msttexthash="59059" _msthash="212"><button className='btnOff'>SOBRE NOSOTROS</button></Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/cursos" className="nav-link" _msttexthash="72878" _msthash="213"><button className='btnOff'>CURSOS</button></Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/nuestra-sede" className="nav-link" _msttexthash="72878" _msthash="213"><button className='btnOff'>NUESTRA SEDE</button></Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/contactanos" className="nav-link" _msttexthash="72878" _msthash="213"><button className='btnOn'>CONTÁCTANOS</button></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
        <div className='content'>
        {/* data-aos="fade-down-right" */}
          <div className='txt1'>
            <h1>
              Agradecemos que hayas visitado nuestro sitio web, por favor síguenos en nuestras redes sociales
              y contáctanos a través de nuestros números teléfonicos para solucionar cualquier duda o inquietud,
              recuerda que para aavanzar es un gusto poder atenderte.
            </h1>
          </div>
          <div className='imgs'>
            <a href='https://www.instagram.com/ceaaavanzar/?hl=en' target={'_blank'}><img src='https://i.postimg.cc/Kz4bKFqY/ig.png' className='imgIg'></img></a>
            <a href='mailto:avanzarcea@hotmail.com' target={'_blank'}><img src='https://i.postimg.cc/PNnnFDtL/mail.png' className='imgMail'></img></a>
            <a href='https://www.facebook.com/ceaaavanzar/' target={'_blank'}><img src='https://i.postimg.cc/FKypjJ6W/icono-facebook.png' className='imgFb'></img></a>
            <a href='https://api.whatsapp.com/send?phone=+573208748564&text=Hola,%20estuve%20en%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n%20de%20ustedes.' target={'_blank'}><img src='https://i.postimg.cc/3xpFTv38/icono-whatsapp.png' className='imgWs'></img></a>
          </div>
          <div className='infoContact'>
            <h1>
              Información de contacto: <br></br>
              +57 320 2019852 <br></br>
              +57 320 8748564 <br></br>
              +57 314 8113364 <br></br>
              +57 601 2373981 <br></br>
              +57 601 9382008
            </h1>
            <h1>
              Visítanos <br></br>
              {/* <img src='../../public/img/icono-ubicacion.png' className='ubic'></img> */}
              CARRERA 38 # 9 - 45 OFICINA 628 <br></br>
              San andresito de la 38 <br></br>
              Centro comercial Bahía
            </h1>
          </div>
          <div className='infoContact'>
            <h1>
              Muchas gracias por preferirnos, esperamos poder atenderte.
            </h1>
          </div>
        </div>
      </header>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      {/* {
        AOS.init({
          key: Date.now(),
          duration: 1000,
          once: true
        })
      } */}
    </section>
  )
}

export default Contactanos