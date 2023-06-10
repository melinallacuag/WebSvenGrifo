import React, { useState } from 'react';
import { Card, CardContent,Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { LocalGasStationSharp,HighlightOffSharp,ThreeSixtySharp,LightModeSharp } from '@mui/icons-material';
import Sidenav from '../componentes/navbar'

export default function Ventas() {

    const [selectedMenu, setSelectedMenu] = useState(null);

    const menus = [

        {
          id: 1,
          title: 'VENTAS ',
          color: 'hsl(212, 80%, 44%)',
          link: '/venta', 
          icon: <LocalGasStationSharp />,
        },
        {
          id: 2,
          title: 'CIERRE X',
          color: 'rgb(31 175 31)',
          link: '/menu2',
          icon: <HighlightOffSharp />,
        },
        {
          id: 3,
          title: 'CAMBIO DE TURNO',
          color: '#000000',
          link: '/menu3', 
          icon: <ThreeSixtySharp />,
        },
        {
          id: 4,
          title: 'INICIO DE DIA',
          color: '#123456',
          link: '/menu4', 
          icon: <LightModeSharp />,
        },
      
      ];

    const handleMenuSelect = (menuId) => {
        setSelectedMenu(menuId);
      };

  return (
    <div className='container'>

        <Sidenav />

        <div class="container-datos">
            <div class="columnas">
                <div class="columna">
                    <div className='contenedor_titulo'> Ventas </div>
                </div>

                <div class="columna">
                <Carousel>
      <div>
        <img src="path/to/image1.jpg" alt="Image 1" />
        <p className="legend">Image 1</p>
      </div>
      <div>
        <img src="path/to/image2.jpg" alt="Image 2" />
        <p className="legend">Image 2</p>
      </div>
      <div>
        <img src="path/to/image3.jpg" alt="Image 3" />
        <p className="legend">Image 3</p>
      </div>
    </Carousel>
                </div>
                <div class="columna">
                    
                    <Grid container spacing={2} className='container_lado'>

                        {menus.map((menu) => (

                            <Grid item xs={6} sm={6} md={4} lg={3} xl={2} >

                                <Link  to={menu.link}  key={menu.id} className="menu-link">

                                <Card className={`menu-card2 ${selectedMenu === menu.id ? 'selected' : ''}`}
                                        style={{  borderTop: `6px solid ${menu.color}` }} onClick={() => handleMenuSelect(menu.id)}>

                                    <div className='img-icono'>{menu.icon}</div>

                                    <CardContent  className='contenedor-card2'>

                                    <h2  className="menu-title" style={{  color: menu.color }} >{menu.title}</h2>

                                    </CardContent>

                                </Card>

                                </Link>

                            </Grid>
                        
                        ))}

                    </Grid>
                </div>
            </div>
        </div>
    </div>
  )
}