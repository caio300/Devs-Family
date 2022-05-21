import React, {useContext} from 'react';
import devsContext from '../context/Context';
import apagar from '../icon-apagar.png';
import editar from '../icon-editar.png';
import '../style/DevModal.css';

const DevModal = ({setShowModal}) => {
  const { devShowInfo } = useContext(devsContext);

  return(
    <div className='modal-background'>
      <div className='component-modal'>
        <div className='modal-image'>
          <img src={devShowInfo.img} alt="Foto dev" />
        </div>
        <div className='modal-infos'>
          <h2>{devShowInfo.name}</h2>
          <p>{devShowInfo.area}</p>
          <h3>Idade</h3>
          <p>{devShowInfo.age}</p>
          <h3>Linkedin</h3>
          <p>{devShowInfo.linkedin}</p>
          <h3>Github</h3>
          <p>{devShowInfo.github}</p>
          <div className='modal-buttons'>
            <img className='icon' src={apagar} alt="Icon apagar" />
            <img className='icon' src={editar} alt="Icon editar" />
          </div>
        </div>
      </div>
    </div>
  )
};


export default DevModal;
