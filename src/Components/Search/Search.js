import React, { useState } from 'react'
import './Search.css';
import UseDebounce from '../../hooks/UseDebounce';
const Search = ({updateSearchTerm}) => {
const debouncedCallback = UseDebounce((e)=> updateSearchTerm(e.target.value))
  

  return (
    <div className='search-wrapper'>
        <input type='text' placeholder='username'
        
        className='search-box'
        onChange={(e)=>updateSearchTerm(debouncedCallback(e))}
        />
      

    </div>
  )
}

export default Search