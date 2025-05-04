import React, { useEffect,useState } from 'react'
import TableCoin from '../modules/TableCoin';
import { getCoinList } from '../../services/CryptoApi';
import Pagination from '../modules/Pagination';
function HomePage() {
    const [coins,setCoins]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
     const fetchData=async()=>{
      const res=await fetch(getCoinList());
      const json=await res.json();
      setCoins(json);
      setIsLoading(false)
     }
     fetchData()
    },[])
  return (
    <div>
      <Pagination/>
       <TableCoin coins={coins} isLoading={isLoading}/>
    </div>
  )
}

export default HomePage
