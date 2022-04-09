import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {

  const {page, 
         handleClickIncrease,
         nbPages,
         handleClickDecrease} = useGlobalContext();
 
  return (
    <div className='btn-container'>
      <button
        onClick={handleClickDecrease}
      >
        prev
      </button>
      <p>{page + 1} of {nbPages}</p>
      <button 
         onClick={handleClickIncrease}
      >
        next
      </button>
    </div>
  )
}

export default Buttons
