import React, { useState } from 'react';
import logo from '../logo-devs.png';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "../style/Login.css";


const Login = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tokenAPI = await axios.get('http://localhost:3001/devs');
    console.log(tokenAPI);
  };

  return(
    <div className='container'>
      <form className='container-form' onSubmit={(event) => handleSubmit(event)}>
        <img className='container-img' src={logo} alt="Logo devs family" />
        <label className='label-inputs' htmlFor="email">
          Email
          <input value={email} onChange={({target}) => setEmail(target.value)} type="email" />
        </label>
        <label className='label-inputs' htmlFor="password">
          Senha
          <input value={password} onChange={({target}) => setPassword(target.value)} type="password" />
        </label>
        <button disabled={(!email || !password)} className='buttom-login' type='submit'>Entrar</button>
      </form>
    </div>
  );
};

export default Login;


/* if (tokenAPI.data.token) {
  localStorage.setItem('token', tokenAPI.data.token)
  history.push('/home');
}  */