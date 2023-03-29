import React from 'react'
import logo from '../../public/img/logo-avanzar.png'
import { Link } from 'react-router-dom'
import '../../src/SobreNosotros.css'

const Cursos = (props) => {
    return (
        <>
            <header className='cursos'>
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
                                        <Link to="/cursos" className="nav-link" _msttexthash="72878" _msthash="213"><button className='btnOn'>CURSOS</button></Link>
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
                <div className="imagenes">
                    {props.children}
                </div>
            </header>
        </>
    )
}

export default Cursos