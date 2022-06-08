import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import devsContext from "../context/Context";

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
    <div>
      <div>
        {!messageDeleteApi ? <div>
          <h2>Você realmente deseja apagar esse dev ?</h2>
          <button onClick={() => deleteDev(devShowInfo.id)}>Apagar</button>
          <button onClick={() => setDeleteModal(false)}>Cancelar</button>        
        </div> : <div>
          <h2>{messageDeleteApi}</h2>
          <button onClick={() => {setDeleteModal(false); setDeleteDev(!isDeleteDev)}}>Fechar</button>
        </div>}
      </div>
    </div>
  );
};

export default DeleteDevModal;
