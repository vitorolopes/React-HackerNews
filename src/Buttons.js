import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {

  const {page, 
         nbPages,
        handleClick} = useGlobalContext();
 
  return (
    <div className='btn-container'>
      <button
        onClick={() => handleClick("dec")}
      >
        prev
      </button>
      <p>{page + 1} of {nbPages}</p>
      <button 
        onClick={() => handleClick("inc")}
      >
        next
      </button>
    </div>
  )
}

export default Buttons
