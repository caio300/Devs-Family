import React from 'react';
import logo from '../logo-devs-header.png'
import '../style/Header.css';

const Header = () => {
  return (
    <header className='container-header'>
      <img src={logo} alt="Logo Devs Family" />
      <div>
        <button>Sair</button>
      </div>
    </header>
  );
};

export default Header;
