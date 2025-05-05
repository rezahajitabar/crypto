import React from 'react'
import styles from '../modules/Pagination.module.css'
function Pagination({page,setPage}) {
    
    const previousHandler=()=>{
        if(page < 1) return;
        setPage((page)=> page - 1);
    }

    const nextHandler=()=>{
        if(page >= 10) return;
        setPage((page)=> page + 1)
    }
  return (
    <div>
    <button onClick={previousHandler}>Previous</button>

    <button onClick={() => goToPage(1)} style={{ color: page === 1 ? "red" : "black" }}>1</button>
    <button onClick={() => goToPage(2)} style={{ color: page === 2 ? "red" : "black" }}>2</button>

    {page > 3 && <span>...</span>}

    {page > 2 && page < 9 && (
      <button style={{ color: "red" }}>{page}</button>
    )}

    {page < 8 && <span>...</span>}

    <button onClick={() => goToPage(9)} style={{ color: page === 9 ? "red" : "black" }}>9</button>
    <button onClick={() => goToPage(10)} style={{ color: page === 10 ? "red" : "black" }}>10</button>

    <button onClick={nextHandler}>Next</button>
  </div>
  )
}

export default Pagination
