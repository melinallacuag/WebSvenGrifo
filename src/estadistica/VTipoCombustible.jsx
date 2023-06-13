import React from 'react'
import { PieChart, Pie, Tooltip, Legend, Cell , BarChart, Bar, XAxis, YAxis, CartesianGrid  } from 'recharts';


export default function VTipoCombustible() {

    const datas = [
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
            <PieChart width={400} height={400}>
      <Pie
        data={datas}
        dataKey="sales"
        nameKey="product"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={120}
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
              textAnchor="middle"
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
        {datas.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend layout="vertical" align="right" verticalAlign="middle" />
    </PieChart>
            </div>
            
        </div>
      )

}