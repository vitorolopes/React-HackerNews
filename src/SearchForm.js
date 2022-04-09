import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {

  const {query, handleChange} = useGlobalContext()

  return (
    <form className='search-form' onSubmit={e=>e.preventDefault}>
      <h1 className='title'>Search Hacker News</h1>
      <input type="text" className='form-input'
             value={query}
             onChange={ e => handleChange(e.target.value)}
      />
    </form>
  )
}

export default SearchForm