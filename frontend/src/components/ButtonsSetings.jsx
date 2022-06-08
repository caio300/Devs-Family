import React, { useContext, useState } from 'react';
import devsContext from '../context/Context';
import apagar from '../icon-apagar.png';
import editar from '../icon-editar.png';
import DeleteDevModal from './DeleteDevModal';

const ButtonsSetings = ({value}) => {
  const { setDevShowInfo } = useContext(devsContext);
  const [ deleteModal, setDeleteModal ] = useState(false);

  return (
    <div className='modal-buttons'>
      {deleteModal && <DeleteDevModal value={{setDeleteModal}}/>}
      <img className='icon' src={apagar} alt="Icon apagar" onClick={() => {setDevShowInfo({...value}); setDeleteModal(true)}}/>
      <img className='icon' src={editar} alt="Icon editar"/>
    </div>
  )
};

export default ButtonsSetings;
