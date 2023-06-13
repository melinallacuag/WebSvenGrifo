import React from 'react'
import { PieChart, Pie, Tooltip, Legend, Cell , BarChart, Bar, XAxis, YAxis, CartesianGrid  } from 'recharts';


export default function VFormaPago() {

    const data = [

        { 
            paymentMethod: 'Tarjeta de crédito',
             sales: 1500 
        },
        { 
            paymentMethod: 'Transferencia bancaria',
            sales: 3000 
        },
        { 
            paymentMethod: 'Efectivo',
             sales: 2000 
        },

      ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#008080', '#078010'];

    return (
        <div className='container_formapago'>

            <div className='card_heard'>
                <h6 className='titulo_card'> Ventas por Forma de Pago</h6>
            </div>

            <div className='card_body'>
            <PieChart width={600} height={300}>
                <Pie
                    data={data}
                    dataKey="sales"
                    nameKey="paymentMethod"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                        const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
                        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

                            return (
                                <text
                                    x={x}
                                    y={y}
                                    fill="white"
                                    textAnchor={x > cx ? 'start' : 'end'}
                                    dominantBaseline="central"
                                    className="pie-label"
                                >
                                    {`${(percent * 100).toFixed(0)}%`}
                                </text>
                            );
                            
                        }}

                    animationBegin={500}
                    animationDuration={1000}
                    >

                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}

                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
            </div>
            
        </div>
      )

}