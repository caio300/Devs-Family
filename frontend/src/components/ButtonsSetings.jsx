import React, { useContext, useState } from 'react';
import devsContext from '../context/Context';
import apagar from '../icon-apagar.png';
import editar from '../icon-editar.png';
import DeleteDevModal from './DeleteDevModal';
import EditDevModal from './EditDevModal';

const ButtonsSetings = ({value}) => {
  const { setDevShowInfo } = useContext(devsContext);
  const [ deleteModal, setDeleteModal ] = useState(false);
  const [ editDevModal, setEditDevModal ] = useState(false);

  return (
    <div className='modal-buttons'>
      {deleteModal && <DeleteDevModal value={{setDeleteModal}}/>}
      {editDevModal && <EditDevModal value={{setEditDevModal}}/>}
      <img className='icon' src={apagar} alt="Icon apagar" onClick={() => {setDevShowInfo({...value}); setDeleteModal(true)}}/>
      <img className='icon' src={editar} alt="Icon editar" onClick={() => {setDevShowInfo({...value}); setEditDevModal(true)}}/>
    </div>
  )
};

export default ButtonsSetings;
