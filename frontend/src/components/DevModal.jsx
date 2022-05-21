import React, {useContext} from 'react';
import devsContext from '../context/Context';
import close from '../icon-close.png'
import Buttons from '../components/ButtonsSetings';
import '../style/DevModal.css';

const DevModal = () => {
  const { devShowInfo, setShowModal } = useContext(devsContext);

  return(
    <div className='modal-background'>
      <div className='component-modal'>    
        <img className='modal-image' src={devShowInfo.img} alt="Foto dev" />    
        <div className='modal-infos'>
          <h2>{devShowInfo.name}</h2>
          <p>{devShowInfo.area}</p>
          <h3>Idade</h3>
          <p>{devShowInfo.age}</p>
          <h3>Linkedin</h3>
          <a href={devShowInfo.linkedin}>{devShowInfo.linkedin}</a>
          <h3>Github</h3>
          <a href={devShowInfo.github}>{devShowInfo.github}</a>
          <Buttons />
        </div>
        <img className='img-close' src={close} alt="Fechar" onClick={() => setShowModal(false)}/>
      </div>
    </div>
  )
};


export default DevModal;
