import React, { useState } from 'react';
import Slider from 'react-slick';
import Sidenav from '../componentes/navbar'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const animales = [
  { nombre: 'Perro', categoria: 'Mamífero' },
  { nombre: 'Gato', categoria: 'Mamífero' },
  { nombre: 'Aguila', categoria: 'Ave' },
  { nombre: 'Tortuga', categoria: 'Reptil' },
];

const categorias = [
   { nrolado: 'Mamífero'}, 
   { nrolado: 'Ave'},
   { nrolado: 'Reptil'},
   { nrolado: 'Mascota'},
   { nrolado: 'Mamífero'}, 
   { nrolado: 'Ave'},
   { nrolado: 'Reptil'},
   { nrolado: 'Mascota'},
];

function App() {
  const [filtroCategoria, setFiltroCategoria] = useState('');

  const animalesFiltrados =  filtroCategoria === ''
        ? animales : animales.filter(animal => animal.categoria === filtroCategoria);

  const handleCategoriaClick = categoria => {
    setFiltroCategoria(categoria);
  };

  return (
    <div  className='containers'>
        <Sidenav />
            <div class="container-datos">
                <div class="columnas">
                    <div class="columna">
                        <h1>Filtrado de Animales</h1>
                        <Categorias
                            categorias={categorias}
                            filtroCategoria={filtroCategoria}
                            handleCategoriaClick={handleCategoriaClick}
                        />
                        {animalesFiltrados.length > 0 && (
                            <ListaAnimales animales={animalesFiltrados} />
                        )}
                    </div>
                </div>
            </div>
    </div>
  );
}

function Categorias({ categorias, filtroCategoria, handleCategoriaClick }) {
      const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div>
    
      <h2>Categorías</h2>
      <Slider {...sliderSettings}>
      
        {categorias.map(categoria => (
          <Grid item key={categoria.nrolado} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                margin: '0 auto',
                marginBottom: '20px',
                cursor: 'pointer',
                backgroundColor: filtroCategoria === categoria.nrolado ? '#f1f1f1' : 'white'
              }}
              onClick={() => handleCategoriaClick(categoria.nrolado)}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {categoria.nrolado}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        
      </Slider>
    </div>
  );
}

function ListaAnimales({ animales }) {
  
  return (
    <div >
         
      <h2>Lista de animales</h2>
  
      <Grid container spacing={2}>
        {animales.map(animal => (
          <Grid item key={animal.nombre} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: '0 auto', marginBottom: '20px' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {animal.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Categoría: {animal.categoria}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;