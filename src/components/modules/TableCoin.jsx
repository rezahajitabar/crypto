import React from "react";
import { RotatingLines } from "react-loader-spinner";
import chartup from "../../assets/chart-up.svg";
import chartdown from "../../assets/chart-down.svg";
import styles from "../modules/TableCoin.module.css";
function TableCoin({ coins, isLoading,currency,setChart }) {
  console.log(coins);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
                <TableRow coin={coin} key={coin.id}  currency={currency} setChart={setChart}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

const TableRow = ({
  coin: {
    image,
    name,
    symbol,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  },
  currency,
  setChart
}) => {
  const showChart=()=>{
    setChart(true);
  }
  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showChart}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>{currency==='usd' && "$" || currency==='eur' && "€" || currency==="jpy" && '¥'}{current_price.toLocaleString()}</td>
      <td className={price_change > 0 ? styles.success : styles.error}> {price_change !== null && price_change !== undefined ? `${price_change.toFixed(2)}%` : "N/A"}</td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartup : chartdown} alt="" />
      </td>
    </tr>
  );
};
