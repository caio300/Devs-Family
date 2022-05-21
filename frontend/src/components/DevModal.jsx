import React, {useContext} from 'react';
import devsContext from '../context/Context';

const DevModal = ({setShowModal}) => {
  const { devShowInfo } = useContext(devsContext);

  return(
    <div className='modal-background'>
      <div className='component-modal'>
        <div>
          <img src={devShowInfo.img} alt="Foto dev" />
        </div>
        <div>
          <h2>{devShowInfo.name}</h2>
          <p>{devShowInfo.area}</p>
          <h3>Idade</h3>
          <p>{devShowInfo.age}</p>
          <h3>Linkedin</h3>
          <p>{devShowInfo.linkedin}</p>
          <h3>Github</h3>
          <p>{devShowInfo.github}</p>
        </div>
      </div>
    </div>
  )
};


export default DevModal;
