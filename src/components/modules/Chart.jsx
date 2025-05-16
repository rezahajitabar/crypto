import React, { useState } from 'react';
import styles from '../modules/Chart.module.css';
import {convertData} from "../helper/convertData";
import { CartesianGrid, LineChart, ResponsiveContainer,Line, YAxis, XAxis, Legend, Tooltip } from 'recharts';
function Chart({chart,setChart}) {

  const [type,setType]=useState("prices")
  console.log(convertData(chart,type));
  
  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={()=> setChart(null)}>X</span>
      <div className={styles.chart}>
   
         <div className={styles.graph}>
         <ChartComponent data={convertData(chart,type)} type={type}/>
         </div>
         <button onClick={(e)=>setType(e.target.innerText)}>prices</button>
         <button onClick={(e)=>setType(e.target.innerText)}>market_caps</button>
         <button onClick={(e)=>setType(e.target.innerText)}>total_volume</button>
      </div>  
    </div>
  )
}

export default Chart

const ChartComponent=({data,type})=>{
  return (
    <ResponsiveContainer width="100%" height="100%">
    <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey={type} stroke="#3874ff" strokeWidth={2}/>
      <CartesianGrid stroke="#404042"/>
      <YAxis dataKey={type} domain={["auto","auto"]}/>
      <XAxis dataKey="date"/>
      <Legend/>
      <Tooltip/>
    </LineChart>
   </ResponsiveContainer>
  )
}
