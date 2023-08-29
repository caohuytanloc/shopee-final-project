import React from 'react'

function NavbarHeader() {
  return (
    <div className='header-container md:flex'>
      <div className='navbar-wrapper'>
        <nav className='container navbar'>
          <div className='navbar-left md:flex'>
            <a href="">Kênh người bán</a>
            <a href=''>Trở thành người bán Shopee</a>
            <a href=''>Tải ứng dụng</a>
          </div>
          <ul className='navbar__links'>
            <a>Đăng ký</a>
            <a>Đăng nhập</a>
          </ul>
        </nav>
      </div>
    </div>
  )
}


export default NavbarHeader
