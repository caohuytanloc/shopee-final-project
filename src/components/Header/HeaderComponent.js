import React from 'react'
import NavbarHeader from './NavbarHeader'
import SearchHeader from './SearchHeader'
import '../styles/Header.css'

function HeaderComponent(props) {
  return (
    <header className='shopee-header shopee-header--sticky'>
      <NavbarHeader/>
      <SearchHeader/>
    </header>
     
  )
}

export default HeaderComponent

