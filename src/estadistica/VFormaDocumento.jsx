import { colors } from '@mui/material';
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';


export default function VFormaDocumento() {

  const data = [

    { 
        documento: 'Boleta',
        ventas: 10500 
    },
    { 
        documento: 'Factura',
        ventas: 7000 
    },
    { 
        documento: 'Vales',
        ventas: 3500 
    },
    { 
        documento: 'Nota de crédito',
        ventas: 1800 
    },
    { 
        documento: 'Nota de debito',
        ventas: 6500
    },
    { 
        documento: 'Serafin',
        ventas: 4500
    },

  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p className="label_card" >S/ {data.ventas}</p>
        </div>
      );
    }
  
    return null;
  };

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#008080', '#078010'];

    return (
        <div className='container_formapago'>

            <div className='card_heard'>
                <h6 className='titulo_card'> Ventas por Tipo de Documentos</h6>
            </div>

            <div className='card_body'>
                <BarChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="documento" interval={0} angle={-45} textAnchor="end" height={80}  tick={{ fontSize: 12 , fontWeight: 'bold', fill: '#5c657e'}}/>
                    <YAxis  tick={{ fontSize: 12, fontWeight: 'bold', fill: '#5c657e' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="ventas"  animationDuration={1000}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
            
        </div>
      )

}