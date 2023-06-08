import React, {useEffect, useState } from 'react';
import { Card, CardContent,Grid, Typography } from '@mui/material';

import { Link  } from 'react-router-dom';
import { LocalGasStationSharp,HighlightOffSharp,ThreeSixtySharp,LightModeSharp } from '@mui/icons-material';

const Dashboard = () => {

  const [selectedMenu, setSelectedMenu] = useState(null);

  const [authenticated, setauthenticated] = useState(null);


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

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  useEffect(() => {
    if (authenticated === null) {
      setSelectedMenu(null); // Restablecer el estado de selectedMenu a null al cerrar sesión
    }
  }, [authenticated]);

  const handleMenuSelect = (menuId) => {
    setSelectedMenu(menuId);
  };

  const handleLogout = () => {
    
    localStorage.removeItem("authenticated");
    setauthenticated(null);
    window.location.href = '/'; 
 
  };

  if (!authenticated) {
   
    return null;
  } else {
    
  return (
    <div>

    <div className="container-menu">
    <button onClick={handleLogout}>Salir</button>

      <Grid container spacing={2}>

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
  );
        }
};

export default Dashboard;