import React from 'react'
import logo from '../../public/img/logo-avanzar.png'
import { Link } from 'react-router-dom'
import '../../src/Home.css'
import Typed from 'typed.js';

const Home = () => {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                'ES HORA DE AVANZAR'
            ],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    return (
        <>
                <header className="header">
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
                                        <Link to="/contactanos" className="nav-link" _msttexthash="72878" _msthash="213"><button className='btnOff'>CONTÁCTANOS</button></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="texto">
                        <span style={{ whiteSpace: 'pre' }} ref={el} />
                    </div>
                </header>
        </>
    )
}
// ReactDOM.render(
//     <TypedReactHooksDemo />,
//   document.getElementById('react-root')
// );
export default Home