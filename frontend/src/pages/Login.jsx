import React, { useState } from 'react';
import logo from '../logo-devs.png';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "../style/Login.css";


const Login = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [falidPassword, setFalidPassword] = useState('')
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const tokenAPI = await axios.post('http://localhost:3001/login', { email, password });
      if (tokenAPI.data.token) {
        localStorage.setItem('token', tokenAPI.data.token)
        history.push('/home');
      }
    }
    catch (error) {
      setFalidPassword(error.response.data.message)
      console.log(error.response.data.message);
    }
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
          <div className='div-message-error'>
            {falidPassword && <p>{falidPassword}</p>}
          </div>
        </label>
        <button disabled={(!email || !password)} className='buttom-login' type='submit'>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
 