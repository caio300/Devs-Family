import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import devsContext from "../context/Context";
import close from '../icon-close.png';
import '../style/DeleteDevModal.css';

const DeleteDevModal = ({value}) => {
  const { devShowInfo, deleteDev: isDeleteDev, setDeleteDev } = useContext(devsContext);
  const [ messageDeleteApi, setmessageDeleteApi ] = useState('');
  const { setDeleteModal } = value;

  const deleteDev = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`http://localhost:3001/devs/${id}`, {headers: { authorization: token }});
      setmessageDeleteApi(response.data.message)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
     
  }, [messageDeleteApi]);

  return (
    <div className="modal-background-deleteDev">
      <div className="component-modal-deleteDev">
        {!messageDeleteApi ? <div className="message-modal-delete">
          <h2>Você realmente deseja apagar esse dev ?</h2>
          <div className="button-save-deleteDev">
            <button onClick={() => deleteDev(devShowInfo.id)}>Apagar</button>        
          </div>
        </div> : <div className="message-modal-delete">
          <h2>{messageDeleteApi}</h2>
          <div className="button-save-deleteDev">
            <button onClick={() => {setDeleteModal(false); setDeleteDev(!isDeleteDev)}}>Fechar</button>
          </div>
        </div>}
        <button className="img-close-deleteDev" onClick={() => setDeleteModal(false)}>
            <img src={close} alt="Fechar" />
        </button>
      </div>
    </div>
  );
};

export default DeleteDevModal;
