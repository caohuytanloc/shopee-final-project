import React from 'react'

function SearchHeader(props) {
  return (
    <div className='container-wrapper header-with-search-wrapper'>
      <div className='container header-with-search'>
        <a className='header-with-search__logo-section' href=''>
          <div className='logo-section-wrapper'>
            <img src='logo-shopee.png' alt='logo'/>
          </div>
        </a>
        
      </div>
    </div>
  )
}


export default SearchHeader