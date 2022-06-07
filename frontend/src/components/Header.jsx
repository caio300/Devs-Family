import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../logo-devs-header.png'
import '../style/Header.css';

const Header = () => {
  const history = useHistory();
  return (
    <header className='container-header'>
      <img src={logo} alt="Logo Devs Family" />
      <div>
        <button onClick={() => history.push('/')}>Sair</button>
      </div>
    </header>
  );
};

export default Header;
