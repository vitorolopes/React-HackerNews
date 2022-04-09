import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {

  // const {page, handleClickIncrease} = useGlobalContext();
 
  return (
    <div className='btn-container'>
      <button>prev</button>
      {/* <p>{page + 1} of 50</p>
      <button onClick={handleClickIncrease}>next</button> */}
    </div>
  )
}

export default Buttons