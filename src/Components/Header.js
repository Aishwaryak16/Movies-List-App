import React from 'react';
import logo from '../Image/Netflix-Brand-Logo.png';

const Header = () => {
  return (
    <>
      <div className='header-container d-flex justify-content-between align-items-center ps-5 pe-5 fixed-top m-auto position-absolute'>
        <img src={logo} width='110px' />
        <button className='btn-danger p-2 border-0 rounded'>SignIn</button>
      </div>
    </>
  )
}

export default Header
