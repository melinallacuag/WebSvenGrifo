import React from 'react'
import { PieChart, Pie, Tooltip, Legend, Cell , BarChart, Bar, XAxis, YAxis, CartesianGrid  } from 'recharts';

import Sidenav from '../componentes/navbar'
import VFormaDocumento from '../estadistica/VFormaDocumento'
import VFormaPago from '../estadistica/VFormaPago'
import VTipoCombustible from '../estadistica/VTipoCombustible'
import VCreditoContado from '../estadistica/VCreditoContado'


export default function Home() {

  const data = [
    { paymentMethod: 'Tarjeta de crédito', sales: 1500 },
    { paymentMethod: 'Transferencia bancaria', sales: 3000 },
    { paymentMethod: 'Efectivo', sales: 2000 },
  ];

  const datas = [
    { product: 'Producto A', sales: 150 },
    { product: 'Producto B', sales: 300 },
    { product: 'Producto C', sales: 500 },
    // ...
    // Datos para otros productos
    // ...
  ];


  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  return (
    <div className='container'>

      <Sidenav />
      <div class="container-datos">
            <div class="columnas">
                <div class="columna">

      <div className='contenedor_titulo'>Dashboard</div>

      <VFormaDocumento/>

      <VFormaPago/>

      <VTipoCombustible/>
      <VCreditoContado/>

   
      
      </div>
      </div>
      </div>
     


        
    </div>
  )
}