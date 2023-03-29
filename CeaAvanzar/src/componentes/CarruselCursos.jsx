import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import '../componentes/CarruselCursos.css';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const CarruselCursos = () => {
    return (
        <Swiper
            navigation={true}
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
            loop={false}
            coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            }}
            pagination={{
                clickable: true
            }}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='cardCurso'>
                    <img src='https://i.postimg.cc/YqhnL0zg/moto-avanzar.png' className='imagenesCarrusel'></img>
                    <h1>CATEGORIA A2 (MOTO)</h1>
                    <div className='txtInfo'>
                    <p>
                        *28 Horas de teoría <br></br>
                        3 de éstas son de taller <br></br>
                        <br></br>
                        *15 Horas de prácticas <br></br>
                    </p>
                    </div>
                    <a href='https://api.whatsapp.com/send?phone=+573202019852&text=Hola,%20estuve%20en%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20la%20categor%C3%ADa%20A2' target={'_blank'} className='btnCurso'>Me interesa este curso</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='cardCurso'>
                    <img src='https://i.postimg.cc/6qShfVfZ/carro-avanzar.png' className='imagenesCarrusel'></img>
                    <h1>CATEGORIA B1</h1>
                    <h2>(CARRO PARTICULAR)</h2>
                    <div className='txtInfo'>
                    <p>
                        *30 Horas de teoría <br></br>
                        5 de éstas son de taller <br></br>
                        <br></br>
                        *20 Horas de prácticas <br></br>
                    </p>
                    </div>
                    <a href='https://api.whatsapp.com/send?phone=+573202019852&text=Hola,%20estuve%20en%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20la%20categor%C3%ADa%20B1' target={'_blank'} className='btnCurso'>Me interesa este curso</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='cardCurso'>
                    <img src='https://i.postimg.cc/cCVQnxdM/taxi-avanzar.png' className='imagenesCarrusel'></img>
                    <h1>CATEGORIA C1</h1>
                    <h2>(CARRO PARTICULAR/PÚBLICO)</h2>
                    <div className='txtInfo'>
                    <p>
                        *35 Horas de teoría <br></br>
                        5 de éstas son de taller <br></br>
                        <br></br>
                        *30 Horas de prácticas <br></br>
                    </p>
                    </div>
                    <a href='https://api.whatsapp.com/send?phone=+573202019852&text=Hola,%20estuve%20en%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20la%20categor%C3%ADa%20C1' target={'_blank'} className='btnCurso'>Me interesa este curso</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='cardCurso'>
                    <img src='https://i.postimg.cc/sxZWyk5B/A2-B1.png' className='imagenesCarrusel'></img>
                    <h1>CATEGORIA A2 Y B1</h1>
                    <h2>(MOTO Y CARRO PARTICULAR)</h2>
                    <div className='txtInfo'>
                    <p>
                        *30 Horas de teoría <br></br>
                        5 de éstas son de taller <br></br>
                        *15 Horas de prácticas de moto <br></br>
                        *20 Horas de prácticas de carro <br></br>
                    </p>
                    </div>
                    <a href='https://api.whatsapp.com/send?phone=+573202019852&text=Hola,%20estuve%20en%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20las%20categor%C3%ADas%20A2%20Y%20B1' target={'_blank'} className='btnCurso'>Me interesa este curso</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='cardCurso'>
                    <img src='https://i.postimg.cc/cLWF9hN7/A2-C1.png' className='imagenesCarrusel'></img>
                    <h1>CATEGORIA A2 Y C1</h1>
                    <h2>(MOTO Y CARRO </h2>
                    <h3>PARTICULAR/PÚBLICO)</h3>
                    <div className='txtInfo'>
                    <p>
                        *35 Horas de teoría <br></br>
                        5 de éstas son de taller <br></br>
                        *15 Horas de prácticas de moto <br></br>
                        *30 Horas de prácticas de carro <br></br>
                    </p>
                    </div>
                    <a href='https://api.whatsapp.com/send?phone=+573202019852&text=Hola,%20estuve%20en%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20las%20categor%C3%ADas%20A2%20Y%20C1' target={'_blank'} className='btnCurso'>Me interesa este curso</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='cardCurso'>
                    <img src='https://i.postimg.cc/cCVQnxdM/taxi-avanzar.png' className='imagenesCarrusel'></img>
                    <h1>RECATEGORIZACIÓN A C1</h1>
                    <h2>(CARRO PARTICULAR/PÚBLICO)</h2>
                    <div className='txtInfo'>
                    <p>
                        *5 Horas de teoría <br></br>
                        <br></br>
                        *10 Horas de prácticas <br></br>
                    </p>
                    </div>
                    <a href='https://api.whatsapp.com/send?phone=+573202019852&text=Hola,%20estuve%20en%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20la%20recategorizaci%C3%B3n%20a%20C1' target={'_blank'} className='btnCurso'>Me interesa este curso</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='cardCurso'>
                <img src='https://i.postimg.cc/3wcCTCzc/horario.png' className='imagenesCarrusel'></img>
                    <h1>NUESTROS HORARIOS</h1>
                    <div className='txtInfo'>
                <p> Teoría
                <br></br>
                    -Lunes a sábado: 8:00 am a 6:00 pm
                    <br></br>
                    -Domingos: 8:00 am a 2:00 pm
                </p>
                <div className='pract'>
                <p>Práctica:
                <br></br>
                    -Lunes a viernes: 6:00 am a 8:00 pm
                    <br></br>
                    -Sábados: 6:00 am a 2:00 pm
                    <br></br>
                    -Domingos: 7:00 am a 1:00 pm
                </p>
                </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='cardCurso'>
                <img src='https://i.postimg.cc/3RGpHMXk/metodos-de-pago.gif' className='gif'></img>
                    <h1>MÉTODOS DE PAGO</h1>
                    <div className='txtInfo'>
                <div className='metodos-de-pago'>
                <img src='https://i.postimg.cc/RV4t2DN0/efectivo.png' className='logos-bancos'></img>
                <img src='https://i.postimg.cc/4NfKWHS7/tarjetas.png' className='tarjetas'></img>
                </div>
                <div className='metodos-de-pago2'>
                <img src='https://i.postimg.cc/L6QsvCPw/logo-bancolombia.png' className='logos-bancos'></img>
                <img src='https://i.postimg.cc/Cxfw7FSn/logo-davivienda.png' className='logos-bancos'></img>
                <img src='https://i.postimg.cc/sDbrvt7j/logo-colpatria.png' className='logos-bancos2'></img>
                </div>
                <div className='metodos-de-pago3'>
                <img src='https://i.postimg.cc/wB04smZX/logo-nequi.png' className='logos-bancos2'></img>
                <img src='https://i.postimg.cc/Kjg0Vszf/logo-daviplata.png' className='logos-bancos2'></img>
                </div>
                </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default CarruselCursos;