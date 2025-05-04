import React, { useState } from 'react'

function Pagination() {
    const [page,setPage]=useState(1);
    const previousHandler=()=>{
        if(page <= 0) return;
        setPage((page)=> page - 1)
    }

    const nextHandler=()=>{
        if(page >= 20) return;
        setPage((page)=> page + 1)
    }
  return (
    <div>
      <button onClick={previousHandler}>previous</button>
      <p>1</p>
      <p>2</p>
      <span>...</span>
      <p>
        {page > 2 && (
            <>
            <p>{page}</p>
            <span>...</span>
            </>
        )}
      </p>
      <p>9</p>
      <p>10</p>
      <button onClick={nextHandler}>next</button>
    </div>
  )
}

export default Pagination
