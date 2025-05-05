import React, { useEffect,useState } from 'react'
import TableCoin from '../modules/TableCoin';
import { getCoinList } from '../../services/CryptoApi';
import Pagination from '../modules/Pagination';
function HomePage() {
    const [coins,setCoins]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(false)
    const [page,setPage]=useState(1);
    useEffect(()=>{
      setIsLoading(true)
     const fetchData=async()=>{
      try{
        const res=await fetch(getCoinList({ page }));
        if(!res.ok){
          throw new Error(`HTTP Error: ${res.status}`);
        }
        const json=await res.json();
        setCoins(json);
        setIsLoading(false)
    }catch(error){
      setIsLoading(false);
      setError(error.message)
    }
   
     }
     fetchData()
    },[page])
  return (
    <div>
      {error ? (<p className="errorHandling">Error : {error.message}</p>) : (
        <>
             <Pagination page={page} setPage={setPage}/>
             <TableCoin coins={coins} isLoading={isLoading}/>
        </>

      )}
 
    </div>
  )
}

export default HomePage
