import React, { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/CryptoApi";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(getCoinList({ page, currency }));
        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    fetchData();
  }, [page,currency]);
  return (
    <div>
      {error ? (
        <p className="errorHandling">Error : {error.message}</p>
      ) : (
        <>
          <Search currency={currency} setCurrency={setCurrency} />
          <TableCoin coins={coins} isLoading={isLoading} currency={currency}/>
          <Pagination page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
}

export default HomePage;
