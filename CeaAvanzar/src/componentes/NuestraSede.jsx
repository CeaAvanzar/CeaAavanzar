import React from 'react'
import logo from '../../public/img/logo-avanzar.png'
import { Link } from 'react-router-dom'
import '../../src/SobreNosotros.css'

const NuestraSede = (props, props2) => {
  const {
    iframeSource = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8754305714874!2d-74.10473288573698!3d4.616301543670198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99c2567403b1%3A0xf61d3b8966c1e2c0!2sCentro%20de%20Ense%C3%B1anza%20Automovil%C3%ADstica%20Avanzar%20%7C%20Academia%20de%20Conducci%C3%B3n!5e0!3m2!1ses-419!2sco!4v1679334166900!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  } = props2
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
                                        <Link to="/nuestra-sede" className="nav-link" _msttexthash="72878" _msthash="213"><button className='btnOn'>NUESTRA SEDE</button></Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/contactanos" className="nav-link" _msttexthash="72878" _msthash="213"><button className='btnOff'>CONTÁCTANOS</button></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                <div className="imagenes">
                {props.children}
            </div>
            <div className="direccion">
            <img src='https://i.postimg.cc/BQPvY5Cv/icono-ubicacion.png' className='icono-ubic'></img>
            <h1 className='direcc'>CARRERA 38 # 9 - 45 OFICINA 628</h1>
            </div>
            <div dangerouslySetInnerHTML={{__html: iframeSource}} className='mapa'>
            </div>
            </header>
        </section>
    )
}

export default NuestraSede