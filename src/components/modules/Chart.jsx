import React, { useState } from "react";
import styles from "../modules/Chart.module.css";
import { convertData } from "../helper/convertData";
import {
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  Line,
  YAxis,
  XAxis,
  Legend,
  Tooltip,
} from "recharts";
function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  console.log(convertData(chart, type));

  const typeHandler=(event)=>{
    setType(event.target.innerText)
  }

  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={chart.coin.image} />
          <p>{chart.coin.name}</p>
        </div>
        <div className={styles.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
        <div onClick={typeHandler} className={styles.types}>
          <button className={`${styles.typesButton} ${type === "prices" ? styles.selected : ""}`}>prices</button>
          <button className={`${styles.typesButton} ${type === "market_caps" ? styles.selected : ""}`}>
            market_caps
          </button>
          <button className={`${styles.typesButton} ${type === "total_volumes" ? styles.selected : ""}`}>
            total_volumes
          </button>
        </div>
        <div className={styles.details}>
          <div>
            <p>Prices :</p>
            <span>${chart.coin.current_price}</span>
          </div>
          <div>
            <p>ATH :</p>
            <span>${chart.coin.ath}</span>
          </div>
          <div>
            <p>Market Cap :</p>
            <span>${chart.coin.market_cap}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey={type} stroke="#3874ff" strokeWidth={2} />
        <CartesianGrid stroke="#404042" />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
