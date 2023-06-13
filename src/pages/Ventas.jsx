import React, { useState,useEffect  } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Sidenav from '../componentes/navbar'

export default function Ventas() {

  const [selectedIndexLado, setSelectedIndexLado] = useState(0); 
  const [selectedIndexmanguera, setSelectedIndexManguera] = useState(0); 
  const [manguerasFiltradas, setManguerasFiltradas] = useState([]);
  

    const cards_lados = [
      {
        nroLado: '01',
        terminalID: 'PUNTO7'
      },
      {
        nroLado: '02',
        terminalID: 'PUNTO7'
      },
      {
        nroLado: '03',
        terminalID: 'PUNTO2'
      },
      {
        nroLado: '04',
        terminalID: 'PUNTO1'
      },
      
    
    ];

    const cards_mangueras = [

      {
        mangueraID: '01',
        nroLado: '01',
        posicion: '1',
        articuloID: '93',
        descripcion: 'G-PREMIUM',
        protocolo: 'S',
        valor: 0
      },
      {
        mangueraID: '03',
        nroLado: '03',
        posicion: '1',
        articuloID: '05',
        descripcion: 'DIESEL DB5',
        protocolo: 'S',
        valor: 0
      },
      {
        mangueraID: '99',
        nroLado: '03',
        posicion: '2',
        articuloID: '05',
        descripcion: 'DIESEL DB5 1',
        protocolo: 'S',
        valor: 0
      },
      {
        mangueraID: '02',
        nroLado: '02',
        posicion: '1',
        articuloID: '05',
        descripcion: 'DIESEL DB5 2',
        protocolo: 'S',
        valor: 0
      },
      {
        mangueraID: '04',
        nroLado: '04',
        posicion: '1',
        articuloID: '07',
        descripcion: 'GLP',
        protocolo: 'S',
        valor: 0
      }, 
    
    ];

    useEffect(() => {
      const selectedLado = cards_lados[selectedIndexLado];
      const filteredMangueras = cards_mangueras.filter(
        (manguera) => manguera.nroLado === selectedLado.nroLado
      );
      setManguerasFiltradas(filteredMangueras);
      setSelectedIndexManguera(1);
    }, [selectedIndexLado]);

    const handleLadoClick = (index) => {
      setSelectedIndexLado(index);
    };
  
    const renderCustomArrowPrev = (onClickHandler, hasPrev, label) => (
      <button
        className="carousel-arrow carousel-arrow-prev"
        onClick={onClickHandler}
        disabled={!hasPrev || selectedIndexmanguera === 0}
        aria-label={label}
      >
        <div className="carousel-arrow-custom">
          <span className="arrow-icon">
            <ArrowBackIosNewIcon />
          </span>
        </div>
      </button>
    );
    
    const renderCustomArrowNext = (onClickHandler, hasNext, label) => (
      <button
        className="carousel-arrow carousel-arrow-next"
        onClick={onClickHandler}
        disabled={!hasNext || selectedIndexmanguera === cards_mangueras.length - 2} 
        aria-label={label}
      >
        <div className="carousel-arrow-custom">
          <span className="arrow-icon">
            <ArrowForwardIosIcon />
          </span>
        </div>
      </button>
    );

    const renderCustomArrowPrevManguera = (onClickHandler, hasPrev, label) => (
      <button
        className="carousel-arrow carousel-arrow-prev"
        onClick={onClickHandler}
        disabled={!hasPrev || selectedIndexmanguera === 0}
        aria-label={label}
      >
        <div className="carousel-arrow-custom">
          <span className="arrow-icon">
            <ArrowBackIosNewIcon /> 
          </span>
        </div>
      </button>
    );
    
    const renderCustomArrowNextManguera = (onClickHandler, hasNext, label) => (
      <button
        className="carousel-arrow carousel-arrow-next"
        onClick={onClickHandler}
        disabled={!hasNext || selectedIndexmanguera === cards_mangueras.length - 2} 
        aria-label={label}
      >
        <div className="carousel-arrow-custom">
          <span className="arrow-icon">
            <ArrowForwardIosIcon />
          </span>
        </div>
      </button>
    );
   

  return (
    <div className='container'>

        <Sidenav />

        <div class="container-datos">
            <div class="columnas">
                <div class="columna">
                    <div className='contenedor_titulo'> Ventas </div>
                </div>

                <div class="columna">

                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  renderIndicator={() => null}
                  renderArrowPrev={renderCustomArrowPrev}
                  renderArrowNext={renderCustomArrowNext}
                  showArrows={true}
                  infiniteLoop={true}
                  swipeable={true}
                  emulateTouch={true}
                  selectedItem={selectedIndexLado}
                  renderThumbs={() => {}}
                  centerMode={true}
                  centerSlidePercentage={33.3}
                  onChange={(index) => setSelectedIndexLado(index)}
                  className="carousel-container"
                >
                  {cards_lados.map((card_lado,index) => (
                    <div
                    className={`card-lados ${selectedIndexLado !== null && index === selectedIndexLado ? 'selected' : ''}`}
                    key={card_lado.nroLado}
                    onClick={() => handleLadoClick(index)}
                  >  <LocalGasStationIcon className="icon-fuel" />
                        <h2 className="title-lado">{card_lado.nroLado}</h2>
                    </div>

                  ))}

                </Carousel>

                </div>

                <div class="columna">
           
                  {manguerasFiltradas.map((card_manguera) => (
                    <div className="card-lados">
                      <LocalGasStationIcon className="icon-fuel" />
                      <div>
                        <h2 className="title-lado">{card_manguera.mangueraID}</h2>
                        <p className='descripcion-manguera'>{card_manguera.descripcion}</p>
                      </div>
                      
                    </div>
                  ))}

           
                   
                </div>
            </div>
        </div>
    </div>
  )
}