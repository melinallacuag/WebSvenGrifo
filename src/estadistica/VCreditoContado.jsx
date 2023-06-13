import React from 'react'
import { PieChart, Pie, Tooltip, Legend, Cell , BarChart, Bar, XAxis, YAxis, CartesianGrid  } from 'recharts';


export default function VTipoCombustible() {

    const data = [
        { product: 'Producto A', sales: 150 },
        { product: 'Producto B', sales: 300 },
        { product: 'Producto C', sales: 500 },
        // ...
        // Datos para otros productos
        // ...
    ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#008080', '#078010'];

    return (
        <div className='container_formapago'>

            <div className='card_heard'>
                <h6 className='titulo_card'> Ventas por Forma de Pago</h6>
            </div>

            <div className='card_body'>
            <PieChart width={400} height={400}  style={ {transform:'rotateX(45deg)'}}  >
        <Pie
          data={data}
          dataKey="sales"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
            const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
            const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

            return (
              <text
                x={x}
                y={y}
                fill="white"
                textAnchor="middle"
                dominantBaseline="central"
                className="pie-label"
              >
                {`${(percent * 100).toFixed(0)}%`}
              </text>
            );
          }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          align="right"
          layout="vertical"
          verticalAlign="middle"
       
        />
      </PieChart>
            </div>
            
        </div>
      )

}