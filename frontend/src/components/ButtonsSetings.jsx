import React from 'react';
import apagar from '../icon-apagar.png';
import editar from '../icon-editar.png';

const ButtonsSetings = () => {
  return (
    <div className='modal-buttons'>
      <img className='icon' src={apagar} alt="Icon apagar" />
      <img className='icon' src={editar} alt="Icon editar" />
    </div>
  )
};

export default ButtonsSetings;
